window.questions6 = [
    {
        id: "q51",
        text: "Karen is building a website that is expected to have a minimum of 1000 users continually over the course of 24 hours. For 8 hours each day, traffic is expected to be at about 1800 users. What EC2 buying options should she use to handle all the traffic and be most cost-effective?",
        options: [
            "Karen should rely solely on spot instances since that will be the cheapest option.",
            "Karen should buy enough reserved instance capacity to handle all 1800 users and probably buy a little more capacity just in case it is needed.",
            "Karen should buy reserved instances with enough capacity to cover the baseline of 1000 users, then rely on on-demand instances for the 8 hour period of increased traffic each day.",
            "Karen should buy reserved instances with enough capacity to cover the baseline of 1000 users, then rely on spot instances for the 8 hour period of increased traffic each day."
        ],
        correct: ["Karen should buy reserved instances with enough capacity to cover the baseline of 1000 users, then rely on on-demand instances for the 8 hour period of increased traffic each day."],
        explanation: "Reserved instances should be used to handle the expected baseline traffic to the website. They can be purchased at a significant discount over on-demand instances. Any varying traffic above the baseline should be handled with on-demand instances since they can be added/removed at any time based on current demand. Spot instances should not be used in this scenario."
    },
    {
        id: "q52",
        text: "John, member of your company's development team, needs access to the company's AWS account. What AWS service is used to manage such access?",
        options: [
            "S3",
            "Route 53",
            "IAM",
            "EC2"
        ],
        correct: ["IAM"],
        explanation: "Identity & Access Management (IAM) is the AWS service where user accounts, credentials, and service access are managed."
    },
    {
        id: "q53",
        text: "If you want to have SMS or email notifications sent to various members of your department with status updates on resources in your AWS account, what service should you choose?",
        options: [
            "STS",
            "RDS",
            "GetSMS",
            "SNS"
        ],
        correct: ["SNS"],
        explanation: "Simple Notification Service (SNS) is what publishes messages to SMS and/or email endpoints."
    },
    {
        id: "q54",
        text: "If you want to learn about AWS architectural or security best practices, where will you find that type of information?",
        options: [
            "AWS Yellow Pages",
            "AWS Console Info Section",
            "AWS White Papers",
            "AWS Service Documentation"
        ],
        correct: ["AWS White Papers"],
        explanation: "White papers are a collection of technical documents that outline many AWS relevant topics."
    },
    {
        id: "q55",
        text: "Consolidated billing is managed through what AWS service?",
        options: [
            "AWS TCO",
            "AWS Billing Manager",
            "AWS Consolidated Management",
            "AWS Organizations"
        ],
        correct: ["AWS Organizations"],
        explanation: "AWS Organizations is where you can manage multiple AWS accounts in one place, including its billing features, such as consolidated billing."
    },
    {
        id: "q56",
        text: "What does TCO stand for?",
        options: [
            "Tally of Cost Ownership",
            "Total Continual Ownership",
            "The Cost of Ownership",
            "None of the above"
        ],
        correct: ["None of the above"],
        explanation: "TCO stands for Total Cost of Ownership."
    },
    {
        id: "q57",
        text: "Which AWS service is designed to provide scalable and cost-effective data warehousing solutions?",
        options: [
            "Amazon Aurora",
            "Amazon Redshift",
            "Amazon RDS",
            "Amazon DynamoDB"
        ],
        correct: ["Amazon Redshift"],
        explanation: "Amazon Redshift is a fully managed data warehousing service designed for fast and scalable data analysis."
    },
    {
        id: "q58",
        text: "What is a key benefit of using AWS Lambda over traditional EC2 instances for running application code?",
        options: [
            "Lambda allows users to choose the operating system for their functions",
            "Lambda requires manual scaling to handle increased workloads",
            "Lambda eliminates the need for provisioning and managing servers",
            "Lambda is only available in a single AWS region"
        ],
        correct: ["Lambda eliminates the need for provisioning and managing servers"],
        explanation: "AWS Lambda is a serverless computing service that automatically scales and executes code in response to events, eliminating the need to manage infrastructure."
    },
    {
        id: "q59",
        text: "Which AWS service enables centralized management of user access and permissions across multiple AWS accounts?",
        options: [
            "AWS IAM",
            "AWS Organizations",
            "AWS KMS",
            "AWS Shield"
        ],
        correct: ["AWS Organizations"],
        explanation: "AWS Organizations allows administrators to manage policies, permissions, and billing across multiple AWS accounts from a single management console."
    },
    {
        id: "q60",
        text: "Which of the following services is best suited for real-time processing of streaming data in AWS?",
        options: [
            "AWS Kinesis",
            "Amazon S3",
            "AWS Snowball",
            "Amazon RDS"
        ],
        correct: ["AWS Kinesis"],
        explanation: "Amazon Kinesis is designed for real-time processing of streaming data, allowing applications to analyze and act on data as it is received."
    }
];
