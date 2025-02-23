window.questions2 = [
    {
        id: "q11",
        text: "What is the term used to describe giving an AWS user only access to the exact services he/she needs to do the required job and nothing more?",
        options: [
            "The Least Privilege User Principal",
            "The Principal of Least Privilege",
            "The Only Access Principal.",
            "None of the above"
        ],
        correct: ["The Principal of Least Privilege"]
    },
    {
        id: "q12",
        text: "What TWO services/features are required to have highly available and fault tolerant architecture in AWS?",
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
        id: "q13",
        text: "Which of the following will affect how much you are charged for storing objects in S3?",
        options: [
            "The storage class used for the objects stored.",
            "Encrypting data (objects) stored in S3.",
            "Creating and deleting S3 buckets",
            "The total size in gigabytes of all objects stored"
        ],
        correct: ["The storage class used for the objects stored.", "The total size in gigabytes of all objects stored"],
        multiple: true
    },
    {
        id: "q14",
        text: "What endpoints are possible to send messages to with Simple Notification Service (SNS)?",
        options: [
            "SMS",
            "FTP",
            "SQS",
            "Lambda"
        ],
        correct: ["SMS", "SQS", "Lambda"],
        multiple: true
    },
    {
        id: "q15",
        text: "What does S3 stand for?",
        options: [
            "Simple Storage Service",
            "Simplified Storage Service",
            "Simple Store Service",
            "Service for Simple Storage"
        ],
        correct: ["Simple Storage Service"]
    },
    {
        id: "q16",
        text: "What AWS storage class should be used for long-term, archival storage?",
        options: [
            "Glacier",
            "Long-Term",
            "Standard",
            "Infrequent Access"
        ],
        correct: ["Glacier"],
        explanation: "Glacier should be used for (and is specifically designed for) long-term, archival storage."
    },
    {
        id: "q17",
        text: "What has Kim done correctly when building a system where 2 of her EC2 servers failed, but customers were not affected?",
        options: [
            "Properly built an elastic system.",
            "Properly built a scalable system.",
            "Properly built a fault-tolerant system.",
            "None of the above"
        ],
        correct: ["Properly built a fault-tolerant system."],
        explanation: "A fault-tolerant system can sustain failures while remaining operational."
    },
    {
        id: "q18",
        text: "Why would a company decide to use AWS over an on-premises data center?",
        options: [
            "Highly available infrastructure",
            "Elastic resources based on demand",
            "No upfront cost",
            "Cost-effective"
        ],
        correct: ["Highly available infrastructure", "Elastic resources based on demand", "No upfront cost", "Cost-effective"],
        multiple: true
    },
    {
        id: "q19",
        text: "S3 storage classes are rated by what two metric categories?",
        options: [
            "Objectivity",
            "Durability",
            "Availability",
            "Fault tolerance"
        ],
        correct: ["Durability", "Availability"],
        multiple: true,
        explanation: "Each S3 storage class is rated on its availability and durability."
    },
    {
        id: "q20",
        text: "You have been tasked with uploading a batch of files to an S3 bucket but see an 'Access Denied' warning. What is the most probable cause?",
        options: [
            "It takes 24 hours to get access to S3.",
            "The S3 service is currently down for maintenance.",
            "You do not have an S3 access policy attached to your IAM user.",
            "Your boss has not enabled proper bucket permission."
        ],
        correct: ["You do not have an S3 access policy attached to your IAM user."],
        explanation: "If you see an 'Access Denied' error, it is likely due to missing IAM permissions for S3."
    }
];
