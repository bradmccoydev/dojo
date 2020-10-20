application_name = "dojo"
application_s3_bucket = "dojo.bradmccoy.io"
ui_s3_bucket = "dojo.bradmccoy.io"
root_domain_name = "bradmccoy.io"
application_subdomain = "dojo.bradmccoy.io"
route53_zone_id = "secret"
ssl_cert = "secret"
cognito_role_external_id = "dojo-01"
tags = {
    "provisioner"   = "terraform"
    "owner"         = "bradmccoydev@gmail.com"
    "application"   = "dojo"
    "environment"   = "DEV"
}