window.questions3 = [
    {
        id: "q21",
        text: "What best describes the concept of scalability?",
        options: [
            "The ability for a system to withstand a certain amount of failure and still remain functional.",
            "The ability for a system to grow in size, capacity, and/or scope.",
            "The ability for a system to grow and shrink based on demand.",
            "The ability for a system be accessible when you attempt to access it."
        ],
        correct: ["The ability for a system to grow in size, capacity, and/or scope."],
        explanation: "Scalability refers to the concept of a system being able to easily (and cost-effectively) scale UP."
    },
    {
        id: "q22",
        text: "Mike is setting up the infrastructure for a web application that requires three EC2 instances to handle the expected demand. However, when testing the application, all traffic is being routed to only one of the servers. What AWS feature should he add to evenly distribute traffic?",
        options: [
            "Elastic Load Balancer",
            "Auto Scaling",
            "Route 53",
            "CloudFront"
        ],
        correct: ["Elastic Load Balancer"],
        explanation: "An Elastic Load Balancer is designed to evenly distribute incoming web traffic between all servers that are associated with it."
    },
    {
        id: "q23",
        text: "Karen's website will have a baseline of 1000 users 24/7, but traffic spikes to 1800 users for 8 hours daily. What EC2 buying option should she use for cost efficiency?",
        options: [
            "Karen should rely solely on spot instances since that will be the cheapest option.",
            "Karen should buy enough reserved instance capacity to handle all 1800 users and probably buy a little more capacity just in case it is needed.",
            "Karen should buy reserved instances with enough capacity to cover the baseline of 1000 users, then rely on on-demand instances for the 8-hour period of increased traffic each day.",
            "Karen should buy reserved instances with enough capacity to cover the baseline of 1000 users, then rely on spot instances for the 8-hour period of increased traffic each day."
        ],
        correct: ["Karen should buy reserved instances with enough capacity to cover the baseline of 1000 users, then rely on on-demand instances for the 8-hour period of increased traffic each day."],
        explanation: "Reserved instances handle baseline traffic at a discount, while on-demand instances adjust for daily spikes."
    },
    {
        id: "a24",
        text: "John, a developer, needs access to the company's AWS account. Which AWS service is used to manage access?",
        options: [
            "S3",
            "Route 53",
            "IAM",
            "EC2"
        ],
        correct: ["IAM"],
        explanation: "Identity & Access Management (IAM) is the AWS service where user accounts, credentials, and access permissions are managed."
    },
    {
        id: "a25",
        text: "Which AWS service should you use to send SMS or email notifications about status updates on AWS resources?",
        options: [
            "STS",
            "RDS",
            "GetSMS",
            "SNS"
        ],
        correct: ["SNS"],
        explanation: "Simple Notification Service (SNS) is used to publish messages to SMS and email endpoints."
    },
    {
        id: "q26",
        text: "Where can you find AWS architectural and security best practices?",
        options: [
            "AWS Yellow Pages",
            "AWS Console Info Section",
            "AWS White Papers",
            "AWS Service Documentation"
        ],
        correct: ["AWS White Papers"],
        explanation: "AWS White Papers provide detailed technical guidance on best practices."
    },
    {
        id: "q27",
        text: "Which AWS service manages consolidated billing?",
        options: [
            "AWS TCO",
            "AWS Billing Manager",
            "AWS Consolidated Management",
            "AWS Organizations"
        ],
        correct: ["AWS Organizations"],
        explanation: "AWS Organizations allows managing multiple AWS accounts and billing in one place."
    },
    {
        id: "q28",
        text: "What does TCO stand for?",
        options: [
            "Tally of Cost Ownership",
            "Total Continual Ownership",
            "The Cost of Ownership",
            "Total Cost of Ownership"
        ],
        correct: ["Total Cost of Ownership"],
        explanation: "TCO (Total Cost of Ownership) refers to the complete cost of using a service, including hidden expenses."
    },
    {
        id: "q29",
        text: "What TWO services are required for a highly available and fault-tolerant architecture in AWS?",
        options: [
            "Elastic Load Balancer",
            "CloudFront",
            "ElastiCache",
            "Auto Scaling"
        ],  
        correct: ["Elastic Load Balancer", "Auto Scaling"],
        multiple: true
    },
    {
        id: "q30",
        text: "What is the term used to describe giving an AWS user only access to the exact services he/she needs to do the required job and nothing more?",
        options: [
            "The Least Privilege User Principal",
            "The Principal of Least Privilege",
            "The Only Access Principal",
            "None of the above"
        ],
        correct: ["The Principal of Least Privilege"],
        explanation: "O conceito de 'Principal of Least Privilege' garante que um usuário tenha apenas os acessos necessários para seu trabalho, aumentando a segurança."
    }
  ];
  