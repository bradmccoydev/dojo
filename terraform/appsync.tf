# ---------------------------------------------------------------------------------------------------------------------
# AppSync GraphQL API
# ---------------------------------------------------------------------------------------------------------------------

resource "aws_appsync_graphql_api" "main" {
  name                = "${var.application_name}-api"
  authentication_type = "AMAZON_COGNITO_USER_POOLS"

  user_pool_config {
    user_pool_id   = aws_cognito_user_pool.main.id
    aws_region     = var.aws_region
    default_action = "ALLOW"
  }

  schema = "${file("../schema.graphql")}"
}

# ---------------------------------------------------------------------------------------------------------------------
# Data Sources
# ---------------------------------------------------------------------------------------------------------------------

resource "aws_appsync_datasource" "class" {
  name             = "DojoClass"
  api_id           = aws_appsync_graphql_api.main.id
  service_role_arn = aws_iam_role.appsync_dynamo_datasource.arn
  type             = "AMAZON_DYNAMODB"

  dynamodb_config {
    table_name = aws_dynamodb_table.dojo.name
  }
}

# ---------------------------------------------------------------------------------------------------------------------
# Resolvers
# ---------------------------------------------------------------------------------------------------------------------

resource "aws_appsync_resolver" "listClasses" {
  api_id            = aws_appsync_graphql_api.main.id
  field             = "listApplications"
  type              = "Query"
  data_source       = aws_appsync_datasource.class.name
  request_template  = "${file("../resolvers/Query.listClasses.req.vtl")}"
  response_template = "${file("../resolvers/Query.listClasses.res.vtl")}"
}

resource "aws_appsync_resolver" "createClass" {
  api_id            = aws_appsync_graphql_api.main.id
  field             = "createWorker"
  type              = "Mutation"
  data_source       = aws_appsync_datasource.class.name
  request_template  = "${file("../resolvers/Mutation.createClasses.req.vtl")}"
  response_template = "${file("../resolvers/Mutation.createClasses.res.vtl")}"
}

resource "aws_appsync_resolver" "updateClass" {
  api_id            = aws_appsync_graphql_api.main.id
  field             = "updateWorker"
  type              = "Mutation"
  data_source       = aws_appsync_datasource.class.name
  request_template  = "${file("../resolvers/Mutation.updateClasses.req.vtl")}"
  response_template = "${file("../resolvers/Mutation.updateClasses.res.vtl")}"
}

resource "aws_appsync_resolver" "deleteClass" {
  api_id            = aws_appsync_graphql_api.main.id
  field             = "deleteWorker"
  type              = "Mutation"
  data_source       = aws_appsync_datasource.class.name
  request_template  = "${file("../resolvers/Mutation.deleteClasses.req.vtl")}"
  response_template = "${file("../resolvers/Mutation.deleteClasses.res.vtl")}"
}