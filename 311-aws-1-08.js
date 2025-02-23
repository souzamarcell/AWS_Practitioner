window.questions8 = [
    {
        id: "q71",
        text: "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
        options: [
            "IAM roles",
            "IAM users",
            "IAM user groups",
            "AWS Organizations"
        ],
        correct: ["IAM user groups"],
        explanation: "IAM user groups allow administrators to assign permissions to multiple users at once, simplifying access management."
    },
    {
        id: "q72",
        text: "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
        options: [
            "AWS OpsWorks",
            "AWS Database Migration Service",
            "AWS Server Migration Service",
            "AWS Application Discovery Service"
        ],
        correct: ["AWS Database Migration Service"],
        explanation: "AWS Database Migration Service (DMS) helps migrate databases to AWS with minimal downtime."
    },
    {
        id: "q73",
        text: "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
        options: [
            "Build security in every layer",
            "Parallelize tasks",
            "Implement elasticity",
            "Adopt monolithic architecture"
        ],
        correct: ["Implement elasticity"],
        explanation: "Elasticity allows automatic scaling of resources based on demand, reducing costs."
    },
    {
        id: "q74",
        text: "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
        options: [
            "Increasing speed and agility",
            "There is no need to worry about security",
            "Gaining complete control over the physical infrastructure",
            "Operating applications on behalf of customers",
            "All of the physical security and most of the data/network security are taken care of for you"
        ],
        correct: [
            "Increasing speed and agility",
            "All of the physical security and most of the data/network security are taken care of for you"
        ]
    },
    {
        id: "q75",
        text: "What is the advantage of the AWS-recommended practice of 'decoupling' applications?",
        options: [
            "Allows treating an application as a single, cohesive unit",
            "Reduces inter-dependencies so that failures do not impact other components of the application",
            "Allows updates of any monolithic application quickly and easily",
            "Allows tracking of any API call made to any AWS service"
        ],
        correct: ["Reduces inter-dependencies so that failures do not impact other components of the application"],
        explanation: "Decoupling ensures that different components can function independently, improving reliability and scalability."
    },
    {
        id: "q76",
        text: "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
        options: [
            "AWS Budgets",
            "AWS Pricing Calculator",
            "AWS Systems Manager",
            "AWS Cost & Usage Reports"
        ],
        correct: ["AWS Cost & Usage Reports"],
        explanation: "AWS Cost & Usage Reports provide detailed insights into AWS billing activities."
    },
    {
        id: "q77",
        text: "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
        options: [
            "AWS services’ costs will be reduced to half the original price",
            "The consolidated billing feature is just for organizational purposes",
            "Each AWS account gets volume discounts",
            "Each AWS account gets five times the free-tier services capacity"
        ],
        correct: ["Each AWS account gets volume discounts"],
        explanation: "Consolidated billing allows multiple accounts to share volume discounts, reducing costs."
    },
    {
        id: "q78",
        text: "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
        options: [
            "Regularly update firmware on EBS devices",
            "Create EBS snapshots",
            "Ensure that EBS data is encrypted at rest",
            "Store a backup daily in an external drive",
            "Prevent any unauthorized access to AWS data centers"
        ],
        correct: [
            "Create EBS snapshots",
            "Ensure that EBS data is encrypted at rest"
        ]
    },
    {
        id: "q79",
        text: "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?",
        options: [
            "By automatically scaling your on-premises resources based on changes in demand",
            "By automatically scaling your AWS resources using an Elastic Load Balancer",
            "By reducing interdependencies between application components wherever possible",
            "By automatically provisioning the required AWS resources based on changes in demand"
        ],
        correct: ["By automatically provisioning the required AWS resources based on changes in demand"],
        explanation: "Elasticity ensures that AWS resources are provisioned dynamically to match demand, optimizing costs and performance."
    },
    {
        id: "q80",
        text: "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
        options: [
            "Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded",
            "Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis",
            "Configure the AWS Budgets Service to alert the company when the threshold is exceeded",
            "Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded",
            "Configure the Amazon Connect Service to alert the company when the threshold is exceeded"
        ],
        correct: [
            "Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded",
            "Configure the AWS Budgets Service to alert the company when the threshold is exceeded"
        ]
    }
];
