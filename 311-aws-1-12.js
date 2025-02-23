window.questions12 = [
    {
        id: "q121",
        text: "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
        options: [
            "A MySQL database installed on an EC2 instance",
            "Amazon Aurora",
            "Amazon DynamoDB",
            "Amazon Neptune"
        ],
        correct: ["Amazon Aurora"],
        explanation: "Amazon Aurora provides automated backups, point-in-time recovery, and replication across multiple availability zones."
    },
    {
        id: "q122",
        text: "What is the AWS service that enables AWS architects to manage infrastructure as code?",
        options: [
            "AWS CloudFormation",
            "AWS Config",
            "Amazon SES",
            "Amazon EMR"
        ],
        correct: ["AWS CloudFormation"],
        explanation: "AWS CloudFormation allows AWS architects to manage infrastructure using code templates."
    },
    {
        id: "q123",
        text: "Under the shared responsibility model, which of the following is the responsibility of AWS?",
        options: [
            "Client-side encryption",
            "Configuring infrastructure devices",
            "Server-side encryption",
            "Filtering traffic with Security Groups"
        ],
        correct: ["Configuring infrastructure devices"],
        explanation: "AWS is responsible for security 'of' the cloud, including the infrastructure and networking devices."
    },
    {
        id: "q124",
        text: "What does the AWS Health Dashboard provide? (Choose TWO)",
        options: [
            "Detailed troubleshooting guidance to address AWS events impacting your resources",
            "Health checks for Auto Scaling instances",
            "Recommendations for Cost Optimization",
            "A dashboard detailing vulnerabilities in your applications",
            "Personalized view of AWS service health"
        ],
        correct: ["Detailed troubleshooting guidance to address AWS events impacting your resources", "Personalized view of AWS service health"],
        explanation: "AWS Health Dashboard provides real-time status updates and guidance on AWS service health and troubleshooting."
    },
    {
        id: "q125",
        text: "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
        options: [
            "AWS Lambda",
            "AWS Config",
            "Amazon CloudWatch",
            "AWS CloudTrail"
        ],
        correct: ["Amazon CloudWatch"],
        explanation: "Amazon CloudWatch monitors AWS resources and applications in real-time, helping diagnose performance issues."
    },
    {
        id: "q126",
        text: "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
        options: [
            "AWS Shield",
            "AWS Management Console",
            "AWS Secrets Manager",
            "AWS Trusted Advisor"
        ],
        correct: ["AWS Trusted Advisor"],
        explanation: "AWS Trusted Advisor provides security best practice recommendations for AWS accounts."
    },
    {
        id: "q127",
        text: "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
        options: [
            "Amazon S3 provides unlimited storage for any type of data",
            "Amazon S3 can run any type of application or backend system",
            "Amazon S3 stores any number of objects, but with object size limits",
            "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere",
            "Amazon S3 provides 99.999999999% (11 9’s) of data durability"
        ],
        correct: ["Amazon S3 can run any type of application or backend system", "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere"],
        explanation: "Amazon S3 is optimized for object storage, not for running applications. Scaling is managed automatically."
    },
    {
        id: "q128",
        text: "In the AWS Shared Responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
        options: [
            "Disk disposal",
            "Controlling physical access to compute resources",
            "Patching the Network infrastructure",
            "Setting password complexity rules",
            "Configuring network access rules"
        ],
        correct: ["Setting password complexity rules", "Configuring network access rules"],
        explanation: "Customers are responsible for managing identity and access, including setting password policies and configuring security rules."
    },
    {
        id: "q129",
        text: "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
        options: [
            "Amazon Aurora",
            "Amazon CloudWatch",
            "AWS Quick Start reference deployments",
            "AWS OpsWorks"
        ],
        correct: ["AWS Quick Start reference deployments"],
        explanation: "AWS Quick Start reference deployments allow customers to deploy common solutions quickly and efficiently."
    },
    {
        id: "q130",
        text: "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
        options: [
            "Elastic RI",
            "Premium RI",
            "Standard RI",
            "Convertible RI"
        ],
        correct: ["Convertible RI"],
        explanation: "Convertible Reserved Instances allow customers to exchange their reserved instances for different configurations if their needs change."
    }
];
