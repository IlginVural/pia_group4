erDiagram
    %% --- ER Diagram Revision ---
    %% Note: Core profile fields have been added back to the 'applicant' table for a complete profile.

    %% --- Core Model ---
    user {
        UUID id PK
        VARCHAR(256) first_name
        VARCHAR(256) last_name
        VARCHAR(256) email "UNIQUE"
        TEXT password_hash "Stores the hashed password"
        VARCHAR(50) role "e.g., 'Hiring Manager', 'Admin'"
        TEXT token "For session management or API access"
        TIMESTAMPTZ created_at
    }

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

    job_postings {
        UUID id PK
        VARCHAR(255) title
        TEXT description
        INT status_id FK
        UUID created_by_id FK "Points to user"
        UUID assignee_id FK "Points to user"
        TIMESTAMPTZ created_at
    }

    applications {
        UUID id PK
        UUID applicant_id FK "Points to the applicant who submitted"
        UUID job_post_id FK
        INT status_id FK
        INT ranking
        TIMESTAMPTZ applied_at
    }

    %% --- Application Detail Tables ---
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
        VARCHAR(10) cefr_level "Stores proficiency, e.g., 'A1', 'B2', 'C1'"
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

    %% --- Core Relationships ---
    user ||--o{ job_postings : "creates/is assigned to"
    applicant ||--o{ applications : "submits"
    job_postings ||--o{ applications : "receives"
    
    %% --- Application Detail Relationships ---
    applications ||--o{ application_documents : "includes"
    applications ||--o{ application_skills : "lists"
    applications ||--o{ application_experience : "details"
    applications ||--o{ application_education : "details"
    applications ||--o{ application_languages : "lists"
    applications ||--o{ application_projects : "showcases"
    applications ||--o{ application_certifications : "includes"

    %% --- Lookup Relationships ---
    job_posting_statuses ||--o{ job_postings : "classifies"
    application_statuses ||--o{ applications : "classifies"
    skills ||--o{ application_skills : "is_a"