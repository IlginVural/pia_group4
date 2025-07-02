erDiagram
        %% --- Identity Tables ---
    users {
        UUID id PK
        VARCHAR(256) user_name
        VARCHAR(256) normalized_user_name
        VARCHAR(256) email
        VARCHAR(256) normalized_email
        BIT email_confirmed
        TEXT password_hash
        VARCHAR(36) security_stamp
        VARCHAR(36) concurrency_stamp
        VARCHAR(50) phone_number
        BIT phone_number_confirmed
        BIT two_factor_enabled
        TIMESTAMPTZ lockout_end
        BIT lockout_enabled
        INT access_failed_count
        TIMESTAMPTZ created_at
    }
    aspnet_roles {
        UUID id PK
        VARCHAR(256) name
        VARCHAR(256) normalized_name
        VARCHAR(36) concurrency_stamp
    }
    aspnet_user_roles {
        UUID user_id PK, FK
        UUID role_id PK, FK
    }
    aspnet_user_claims {
        INT id PK
        UUID user_id FK
        VARCHAR(255) claim_type
        VARCHAR(255) claim_value
    }
    aspnet_user_logins {
        VARCHAR(128) login_provider PK
        VARCHAR(128) provider_key PK
        VARCHAR(255) provider_display_name
        UUID user_id FK
    }
    aspnet_user_tokens {
        UUID user_id PK, FK
        VARCHAR(128) login_provider PK
        VARCHAR(128) name PK
        TEXT value
    }

    %% --- Core ATS Entities ---
    applicant {
        UUID id PK
        VARCHAR(256) first_name
        VARCHAR(256) last_name
        VARCHAR(256) email "UNIQUE"
        TEXT professional_summary
        VARCHAR(50) phone
        VARCHAR(255) address
        VARCHAR(100) city
        VARCHAR(100) country
        VARCHAR(20) postal_code
        VARCHAR(2048) linked_in_url
        VARCHAR(2048) portfolio_url
    }
    recruiter {
        UUID user_id PK, FK
        VARCHAR(255) department
    }
    technical_lead {
        UUID user_id PK, FK
        VARCHAR(255) title
    }

    job_postings {
        UUID id PK
        VARCHAR(255) title
        TEXT description
        INT status_id FK
        UUID created_by_id FK
        UUID assigned_technical_lead_id FK
        TIMESTAMPTZ created_at
    }
    applications {
        UUID id PK
        UUID applicant_id FK
        UUID job_post_id FK
        INT status_id FK
        INT ranking
        TIMESTAMPTZ applied_at
    }

    %% --- Application Detail Tables (Refactored) ---
    application_documents {
        UUID id PK
        UUID application_id FK
        VARCHAR(255) filename
        VARCHAR(2048) file_url
        TIMESTAMPTZ uploaded_at
    }
    application_skills {
        UUID id PK
        UUID application_id FK
        INT skill_id FK
        INT proficiency_level_id FK
        INT years_of_experience
    }
    application_experience {
        UUID id PK
        UUID application_id FK
        VARCHAR(255) job_title
        VARCHAR(255) company_name
        TEXT description
        VARCHAR(255) location
        DATE start_date
        DATE end_date
    }
    application_education {
        UUID id PK
        UUID application_id FK
        VARCHAR(255) degree
        VARCHAR(255) institution
        VARCHAR(255) field_of_study
        DATE start_date
        DATE end_date
    }
    application_languages {
        UUID id PK
        UUID application_id FK
        VARCHAR(100) language
        INT proficiency_level_id FK
    }
    application_projects {
        UUID id PK
        UUID application_id FK
        VARCHAR(255) name
        TEXT description
        VARCHAR(255) role
        TEXT technologies
        DATE start_date
        DATE end_date
        VARCHAR(2048) url
    }
    application_certifications {
        UUID id PK
        UUID application_id FK
        VARCHAR(255) name
        VARCHAR(255) issuer
        DATE issue_date
        DATE expiration_date
        VARCHAR(255) credential_id
        VARCHAR(2048) credential_url
    }

    %% --- Messaging ---
    message_threads {
        UUID id PK
        VARCHAR(255) subject
    }
    message_thread_participants {
        UUID thread_id PK, FK
        UUID user_id PK, FK
    }
    messages {
        UUID id PK
        UUID thread_id FK
        UUID sender_id FK
        TEXT body
        TIMESTAMPTZ sent_at
    }

    %% --- Lookup Tables ---
    skills {
        INT id PK
        VARCHAR(100) name
    }
    job_posting_statuses {
        INT id PK
        VARCHAR(50) name
    }
    application_statuses {
        INT id PK
        VARCHAR(50) name
    }
    proficiency_levels {
        INT id PK
        VARCHAR(50) name
    }

    %% --- Relationships ---
    users ||--o{ aspnet_user_roles : has
    aspnet_roles ||--o{ aspnet_user_roles : contains
    users ||--o{ aspnet_user_claims : has
    users ||--o{ aspnet_user_logins : logs_in_with
    users ||--o{ aspnet_user_tokens : has
    
    users ||--|| recruiter : is_a
    users ||--|| technical_lead : is_a

    recruiter ||--o{ job_postings : creates
    technical_lead ||--o{ job_postings : is_assigned_to
    
    job_postings ||--o{ applications : receives
    applicant ||--o{ applications : submits
    
    %% --- Refactored Relationships: Application as the parent ---
    applications ||--o{ application_documents : "includes"
    applications ||--o{ application_skills : "lists"
    applications ||--o{ application_experience : "details"
    applications ||--o{ application_education : "details"
    applications ||--o{ application_languages : "lists"
    applications ||--o{ application_projects : "showcases"
    applications ||--o{ application_certifications : "includes"

    %% --- Lookup Relationships ---
    job_posting_statuses ||--o{ job_postings : classifies
    application_statuses ||--o{ applications : classifies
    skills ||--o{ application_skills : is_a
    proficiency_levels ||--o{ application_skills : measures
    proficiency_levels ||--o{ application_languages : measures

    %% --- Messaging Relationships ---
    users ||--o{ message_thread_participants : participates_in
    message_threads ||--o{ message_thread_participants : has_participant
    message_threads ||--o{ messages : has
    users ||--o{ messages : sends