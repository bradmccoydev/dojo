terraform {
  backend "s3" {
    bucket         = "terraform.dojo.bradmccoy.io"
    key            = "global/s3/terraform.tfstate"
    region         = "us-west-2"
    dynamodb_table = "terraform_self_service_locks"
    encrypt        = true
  }
}

resource "aws_dynamodb_table" "terraform_self_service_locks" {
  name         = "terraform_dojo_locks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"
  attribute {
    name = "LockID"
    type = "S"
  }
}