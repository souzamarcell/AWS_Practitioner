window.questions14 = [
    {
        id: "q131",
        text: "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
        options: [
            "AWS Organizations",
            "AWS Trusted Advisor",
            "IAM User Groups",
            "AWS Config"
        ],
        correct: ["AWS Organizations"],
        explanation: "AWS Organizations allows users to centrally manage billing, security policies, and access across multiple AWS accounts."
    },
    {
        id: "q132",
        text: "Which service provides object-level storage in AWS?",
        options: [
            "Amazon EBS",
            "Amazon Instance Store",
            "Amazon EFS",
            "Amazon S3"
        ],
        correct: ["Amazon S3"],
        explanation: "Amazon S3 is an object-level storage service that provides scalability, data availability, security, and performance."
    },
    {
        id: "q133",
        text: "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
        options: [
            "AWS Elastic Load Balancer",
            "AWS Budgets",
            "AWS Auto Scaling",
            "AWS Cost Explorer"
        ],
        correct: ["AWS Auto Scaling"],
        explanation: "AWS Auto Scaling automatically adjusts compute capacity to match demand, optimizing cost and performance."
    },
    {
        id: "q134",
        text: "Which S3 storage class is best for data with unpredictable access patterns?",
        options: [
            "Amazon S3 Intelligent-Tiering",
            "Amazon S3 Glacier Flexible Retrieval",
            "Amazon S3 Standard",
            "Amazon S3 Standard-Infrequent Access"
        ],
        correct: ["Amazon S3 Intelligent-Tiering"],
        explanation: "S3 Intelligent-Tiering automatically moves data between frequent and infrequent access tiers based on changing access patterns."
    },
    {
        id: "q135",
        text: "What is the AWS database service that allows you to upload data structured in key-value format?",
        options: [
            "Amazon DynamoDB",
            "Amazon Aurora",
            "Amazon Redshift",
            "Amazon RDS"
        ],
        correct: ["Amazon DynamoDB"],
        explanation: "Amazon DynamoDB is a fully managed NoSQL database service that supports key-value and document data structures."
    },
    {
        id: "q136",
        text: "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
        options: [
            "You have to pay a start-up fee when launching a new instance for the first time.",
            "The on-demand instances follow the AWS pay-as-you-go pricing model.",
            "With on-demand instances, no longer-term commitments or upfront payments are needed.",
            "When using on-demand Linux instances, you are charged per second based on an hourly rate."
        ],
        correct: ["You have to pay a start-up fee when launching a new instance for the first time."],
        explanation: "EC2 On-Demand instances do not require a start-up fee; they follow the pay-as-you-go pricing model."
    },
    {
        id: "q137",
        text: "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
        options: [
            "AWS Trusted Advisor",
            "Amazon Inspector",
            "Amazon SNS",
            "Amazon CloudWatch",
            "Concierge Support Team"
        ],
        correct: ["AWS Trusted Advisor", "Amazon Inspector"],
        explanation: "AWS Trusted Advisor provides security best practices, while Amazon Inspector analyzes application security configurations."
    },
    {
        id: "q138",
        text: "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
        options: [
            "Encrypted keys",
            "Email verification",
            "AWS KMS",
            "AWS MFA"
        ],
        correct: ["AWS MFA"],
        explanation: "AWS Multi-Factor Authentication (MFA) provides an additional layer of security by requiring a second authentication factor."
    },
    {
        id: "q139",
        text: "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
        options: [
            "AWS Knowledge Center",
            "AWS Health Dashboard",
            "Infrastructure Event Management",
            "AWS Support Concierge Service"
        ],
        correct: ["Infrastructure Event Management"],
        explanation: "Infrastructure Event Management (IEM) provides AWS customers with guidance for scaling and performance optimization."
    },
    {
        id: "q140",
        text: "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
        options: [
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon DynamoDB",
            "Amazon CloudWatch"
        ],
        correct: ["Amazon RDS"],
        explanation: "Amazon RDS automates database administration tasks such as provisioning, backups, patching, and scaling."
    }
];
