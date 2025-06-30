erDiagram
    users {
        UUID id PK
        VARCHAR user_name
        VARCHAR normalized_user_name
        VARCHAR email
        VARCHAR normalized_email
        BIT email_confirmed
        VARCHAR password_hash
        VARCHAR security_stamp
        VARCHAR concurrency_stamp
        VARCHAR phone_number
        BIT phone_number_confirmed
        BIT two_factor_enabled
        TIMESTAMPTZ lockout_end
        BIT lockout_enabled
        INT access_failed_count
        TIMESTAMPTZ created_at
    }

    aspnet_roles {
        UUID id PK
        VARCHAR name
        VARCHAR normalized_name
        VARCHAR concurrency_stamp
    }

    aspnet_user_roles {
        UUID user_id PK, FK
        UUID role_id PK, FK
    }

    aspnet_user_claims {
        INT id PK
        UUID user_id FK
        VARCHAR claim_type
        VARCHAR claim_value
    }

    aspnet_user_logins {
        VARCHAR login_provider PK
        VARCHAR provider_key PK
        VARCHAR provider_display_name
        UUID user_id FK
    }

    aspnet_user_tokens {
        UUID user_id PK, FK
        VARCHAR login_provider PK
        VARCHAR name PK
        VARCHAR value
    }

    applicant {
        UUID user_id PK, FK
        TEXT professional_summary
        VARCHAR phone
        VARCHAR address
        VARCHAR city
        VARCHAR country
        VARCHAR postal_code
        VARCHAR linked_in_url
        VARCHAR portfolio_url
        VARCHAR job_title
    }

    recruiter {
        UUID user_id PK, FK
        VARCHAR department
    }

    technical_lead {
        UUID user_id PK, FK
        VARCHAR technical_specialty
    }

    job_postings {
        UUID id PK
        VARCHAR title
        TEXT description
        VARCHAR status
        UUID created_by_id FK
        UUID assigned_technical_lead_id FK
        TIMESTAMPTZ created_at
    }

    applications {
        UUID id PK
        UUID applicant_id FK
        UUID job_post_id FK
        VARCHAR status
        INT ranking
        TIMESTAMPTZ applied_at
    }

    documents {
        UUID id PK
        UUID applicant_id FK
        VARCHAR filename
        TEXT file_url
        TIMESTAMPTZ uploaded_at
    }

    applicant_skills {
        BIGINT id PK
        UUID applicant_id FK
        VARCHAR skill_name
        VARCHAR proficiency_level
        INT years_of_experience
    }

    applicant_experience {
        BIGINT id PK
        UUID applicant_id FK
        VARCHAR job_title
        VARCHAR company_name
        TEXT description
        VARCHAR location
        DATE start_date
        DATE end_date
    }

    applicant_education {
        BIGINT id PK
        UUID applicant_id FK
        VARCHAR degree
        VARCHAR institution
        VARCHAR field_of_study
        DATE start_date
        DATE end_date
        VARCHAR grade
    }

    applicant_languages {
        BIGINT id PK
        UUID applicant_id FK
        VARCHAR language
        VARCHAR proficiency_level
    }

    applicant_projects {
        BIGINT id PK
        UUID applicant_id FK
        VARCHAR name
        TEXT description
        VARCHAR role
        VARCHAR technologies
        DATE start_date
        DATE end_date
        VARCHAR url
    }

    applicant_certifications {
        BIGINT id PK
        UUID applicant_id FK
        VARCHAR name
        VARCHAR issuer
        DATE issue_date
        DATE expiration_date
        VARCHAR credential_id
        VARCHAR credential_url
    }

    message_templates {
        UUID id PK
        UUID recruiter_id FK
        VARCHAR name
        VARCHAR subject
        TEXT body
    }

    messages {
        UUID id PK
        UUID recruiter_id FK
        UUID applicant_id FK
        UUID template_id FK
        VARCHAR subject
        TEXT body
        TIMESTAMPTZ sent_at
    }

    users ||--o{ aspnet_user_roles : has
    aspnet_roles ||--o{ aspnet_user_roles : contains
    users ||--o{ aspnet_user_claims : has
    users ||--o{ aspnet_user_logins : logs_in_with
    users ||--o{ aspnet_user_tokens : has

    users ||--|| applicant : is
    users ||--|| recruiter : is
    users ||--|| technical_lead : is

    recruiter ||--|{ job_postings : creates
    job_postings ||--o{ applications : receives
    applicant ||--o{ applications : submits

    applicant ||--o{ documents : owns
    applicant ||--o{ applicant_skills : has
    applicant ||--o{ applicant_experience : has
    applicant ||--o{ applicant_education : has
    applicant ||--o{ applicant_languages : knows
    applicant ||--o{ applicant_projects : did
    applicant ||--o{ applicant_certifications : owns

    recruiter ||--o{ message_templates : creates
    recruiter ||--o{ messages : sends
    applicant ||--o{ messages : receives
    message_templates ||--o{ messages : uses
