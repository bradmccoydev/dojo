resource "aws_dynamodb_table" "dojo" {
  name           = "dojo"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "id"
  tags = var.tags
    attribute {
    name = "id"
    type = "S"
  }
}