window.questions11 = [
    {
        id: "q111",
        text: "Which of the following services allows customers to manage their agreements with AWS?",
        options: [
            "AWS Artifact",
            "AWS Certificate Manager",
            "AWS Systems Manager",
            "AWS Organizations"
        ],
        correct: ["AWS Artifact"],
        explanation: "AWS Artifact provides on-demand access to AWS security and compliance reports, as well as agreements."
    },
    {
        id: "q112",
        text: "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
        options: [
            "Amazon VPC",
            "Amazon DynamoDB",
            "Amazon Elastic MapReduce",
            "AWS IAM",
            "Amazon Elastic Compute Cloud"
        ],
        correct: ["Amazon DynamoDB", "Amazon Elastic MapReduce"],
        explanation: "AWS fully manages services like DynamoDB and Elastic MapReduce, handling operational tasks such as scaling and patching."
    },
    {
        id: "q113",
        text: "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
        options: [
            "Amazon Aurora",
            "Amazon DynamoDB",
            "Amazon Elastic Block Store",
            "Amazon Redshift"
        ],
        correct: ["Amazon DynamoDB"],
        explanation: "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability."
    },
    {
        id: "q114",
        text: "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
        options: [
            "AWS Identity and Access Management (IAM) user",
            "Infrastructure Event Management (IEM) engineer",
            "AWS Consulting Partners",
            "Technical Account Manager (TAM)"
        ],
        correct: ["Technical Account Manager (TAM)"],
        explanation: "TAMs provide guidance and best practices to help customers optimize their AWS environments."
    },
    {
        id: "q115",
        text: "How can you view the distribution of AWS spending in one of your AWS accounts?",
        options: [
            "By using Amazon VPC console",
            "By contacting the AWS Support team",
            "By using AWS Cost Explorer",
            "By contacting the AWS Finance team"
        ],
        correct: ["By using AWS Cost Explorer"],
        explanation: "AWS Cost Explorer allows customers to visualize and analyze AWS costs and usage over time."
    },
    {
        id: "q116",
        text: "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
        options: [
            "Access keys",
            "Secret token",
            "UserID",
            "User name and password"
        ],
        correct: ["Access keys"],
        explanation: "IAM users need access keys (an access key ID and a secret access key) to interact with AWS CLI."
    },
    {
        id: "q117",
        text: "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
        options: [
            "Contact the AWS Customer Service team",
            "Contact the AWS Abuse team",
            "Contact the AWS Concierge team",
            "Contact the AWS Security team"
        ],
        correct: ["Contact the AWS Abuse team"],
        explanation: "The AWS Abuse team handles reports of abuse involving AWS resources."
    },
    {
        id: "q118",
        text: "Select TWO examples of the AWS shared controls.",
        options: [
            "Patch Management",
            "IAM Management",
            "VPC Management",
            "Configuration Management",
            "Data Center operations"
        ],
        correct: ["Patch Management", "Configuration Management"],
        explanation: "AWS shared responsibility model includes shared controls such as Patch Management and Configuration Management."
    },
    {
        id: "q119",
        text: "In order to implement best practices when dealing with a 'Single Point of Failure,' you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
        options: [
            "ELB",
            "Auto Scaling",
            "Amazon Athena",
            "ECR",
            "Amazon EC2"
        ],
        correct: ["ELB", "Auto Scaling"],
        explanation: "ELB distributes traffic across multiple instances, while Auto Scaling adjusts capacity based on demand, helping prevent single points of failure."
    },
    {
        id: "q120",
        text: "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
        options: [
            "Amazon SNS",
            "Amazon Kinesis Video Streams",
            "AWS CloudFormation",
            "Amazon CloudFront"
        ],
        correct: ["Amazon CloudFront"],
        explanation: "Amazon CloudFront is a CDN that helps deliver video content with high transfer speeds."
    }
];
