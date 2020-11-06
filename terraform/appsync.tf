# ---------------------------------------------------------------------------------------------------------------------
# AppSync GraphQL API
# ---------------------------------------------------------------------------------------------------------------------

resource "aws_appsync_graphql_api" "main" {
  name                = "${var.application_name}-api"
  authentication_type = "AMAZON_COGNITO_USER_POOLS"

  additional_authentication_provider {
    authentication_type = "AWS_IAM"
  }

  additional_authentication_provider {
    authentication_type = "API_KEY"
  }

  user_pool_config {
    user_pool_id   = aws_cognito_user_pool.main.id
    aws_region     = var.aws_region
    default_action = "ALLOW"
  }

  log_config {
    cloudwatch_logs_role_arn = aws_iam_role.appsync.arn
    field_log_level          = "ERROR"
  }

  schema = file("./../src/api/schema.graphql")
}

resource "aws_appsync_api_key" "key" {
  api_id  = aws_appsync_graphql_api.main.id
}

# ---------------------------------------------------------------------------------------------------------------------
# Data Sources
# ---------------------------------------------------------------------------------------------------------------------

resource "aws_appsync_datasource" "class" {
  name             = "DojoClass"
  api_id           = aws_appsync_graphql_api.main.id
  service_role_arn = aws_iam_role.appsync.arn
  type             = "AMAZON_DYNAMODB"

  dynamodb_config {
    table_name = aws_dynamodb_table.dojo.name
  }
}

# ---------------------------------------------------------------------------------------------------------------------
# Resolvers
# ---------------------------------------------------------------------------------------------------------------------

resource "aws_appsync_resolver" "list_classes" {
  api_id            = aws_appsync_graphql_api.main.id
  field             = "listDojoClasses"
  type              = "Query"
  data_source       = aws_appsync_datasource.class.name
  request_template  = file("./../src/api/resolvers/Query.listClasses.req.vtl")
  response_template = <<EOF
  $util.toJson($ctx.result)
  EOF
}

resource "aws_appsync_resolver" "get_class" {
  api_id            = aws_appsync_graphql_api.main.id
  field             = "getDojoClass"
  type              = "Query"
  data_source       = aws_appsync_datasource.class.name
  request_template  = file("./../src/api/resolvers/Query.getDojoClass.req.vtl")
  response_template = <<EOF
  $util.toJson($ctx.result)
  EOF
}

resource "aws_appsync_resolver" "create_class" {
  api_id            = aws_appsync_graphql_api.main.id
  field             = "createDojoClass"
  type              = "Mutation"
  data_source       = aws_appsync_datasource.class.name
  request_template  = file("./../src/api/resolvers/Mutation.createClass.req.vtl")
  response_template = <<EOF
  $util.toJson($ctx.result)
  EOF
}

resource "aws_appsync_resolver" "update_class" {
  api_id            = aws_appsync_graphql_api.main.id
  field             = "updateDojoClass"
  type              = "Mutation"
  data_source       = aws_appsync_datasource.class.name
  request_template  = file("./../src/api/resolvers/Mutation.updateClass.req.vtl")
  response_template = <<EOF
  $util.toJson($ctx.result)
  EOF
}

resource "aws_appsync_resolver" "delete_class" {
  api_id            = aws_appsync_graphql_api.main.id
  field             = "deleteDojoClass"
  type              = "Mutation"
  data_source       = aws_appsync_datasource.class.name
  request_template  = file("./../src/api/resolvers/Mutation.deleteClass.req.vtl")
  response_template = <<EOF
  $util.toJson($ctx.result)
  EOF
}