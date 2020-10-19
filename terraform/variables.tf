variable "application_name" {
  description = "Aws Account ID"
}

variable "application_s3_bucket" {
  description = "AWS S3 State Bucket"
}

variable "ui_s3_bucket" {
  description = "UI S3 Bucket"
}

variable "root_domain_name" {
  description = "Root Domain name"
}

variable "application_subdomain" {
  description = "Application Sub Domain"
}

variable "route53_zone_id" {
  description = "Route 53"
}

variable "ssl_cert" {
  description = "SSL Cert ARN"
}

variable "cognito_role_external_id" {
  description = "Cognito Unique ID"
}

variable "tags" {
  description = "AWS Tags"
}