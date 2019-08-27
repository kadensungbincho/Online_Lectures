# Benefits of AWS CloudFormation

- Infra as code
  - No resources are manually created

- Cost
- Productivity
  - Ability to destroy and re-create an infrastructure on the cloud on the fly
  - Automated generation of Diagram for your templates
  - Declarative programming

- Separation of convern: create many stacks for many apps, and many layers
  - VPC stacks
  - Network Stacks
  - App Stacks

- Don't re-invent the wheel
  - Leverage existing templates on the web
  - Leverage the documentation

# CloudFormation vs Ansible / Terraform
- CloudFormation is AWS native, and will always contain the latest features and options for AWS Service
- CloudFormation is state based, and AWS figures out how to reach that state
- ANsible and Terraform are instruction based, and it can be difficult to fully orchestrate your stacks
- Ansible and Terraform have to be updated every time a new Services or API option comes from AWS, which can take a long time

# First AWS Cloudformation
- create a simple EC2 instance

# Summary of how CloudFormation Works
- Templates have to be uploaded in S3 and then referenced in CloudFormation
- To update a tempalte, we can't edit prvious ones. We have to reupload a new version of the template to AWS 
- Stacks are identified by a name
- Deleting a stack deletes every single artifact that was created by CloudFormation

# YAML Tutorial
- JSON is horrible for CF
- traits
  - Key value pairs
  - nested objects
  - support arrays
  - multi line strings
  - comments available

# Creating an s3 Bucket

# S3 - Updating
- two types of updates
  - Updates with no interruption
  - Replacements updates, such a updating the name of the bucket
  - On replacement, CF does not preserve your underlying data, CF does whatevery you want it to do but it doesn't go and backup your S3 bucket, and so on.

# S3 - Understanding the CF template options
- Tags
- Permissions
- Notification 
- Timeouts
- Rollack on Failure
- Stack Policy

# CF Designer
- visualize
- quickly make it

# CF Building Blocks
Templates components
1. Resources: your AWS resources declared in the template
2. Parameteres: the dynamic inputs for your template
3. Mappings
4. Outputs
5. Conditions
6. Metadata

Templates helpers
1. References
2. Functions

# Deploying CF templates
- Manual way
  - Editing in designer
  - Using the console

- Automated
  - Editing tempaltes in a YAML file
  - USing the AWS CLI

# Parameter Overview
- way to provide inputs to your AWS CF template
- important when
  - want to reuse templates across

# Parameter Theory * Hands on
- Type
  - String
  - Number
  - CommaDelimitedList
  - List<Type>
  - AWS Parameter (to help catch invalid values)

- Description
- Constraints
- ContstraintsDescription(String)
- Min/Max
- Min/Max value
- Defaults
- AllowedValues
- AllowedPattern
- NoEcho

# How to reference a Parameter?
- Fn::Ref, shorthand for this in YAML is !Ref

# Resources
- core of CF
- AWS components that will be created and configured
- over 224 types of resources

# Resources hands-on EC2 instance + security group + EIP

# Optional Attributes for Resources
- DependsOn: Very useful to draw a dependency between two resource. For example, only create an ECS cluster after creating an ASG(Auto Scaling Group).
- DeletionPolicy: protect resources from being deleted even if the cloudformation is deleted (for example an RDS database)
- CreationPolicy
- Metadata
  - Anything you want

# Mappings Overview
- Mappings are fixed variables within your CF templates
- very handy to differentiate between different environemnts

# Fn::FindInMap
- to return a named value from a specific key
- !FindInMap [MapName, ToopLevelKey, SecondLevelKey]

# Mapping Hands on

# Pseudo Parameters in CF
- AWS::AccountId
- AWS::NotificationARNs
- AWS::NoValue
- AWS::Region
- AWS::StackID
- AWS::StackName

# Outputs
- declares option outputs values that we can import into other stacks
- very useful for example if you define a network CF and output the variables such as VPC ID and your Subnet IDs
- Best way to perform some collaboration cross stack, as you let expert handle their own part of the stack

# Outputs Hands on
- Creating a SSH Securty Group as part of one template
- We create an output that references that security group

# Cross Stack Reference Hands On
- Fn::ImportValue
- You can't delete the underlying stack until all the references are deleted too

# Conditions Overview
- used to control the creation of resources or outputs based on a condition
- can be whatever you want, but common ones are:
  - Environment (dev / test / prod)
  - AWS Region
  - Any parameter value

```yml
Conditions:
  Logical ID:
    Intrinsic function
```
- intrinsic function can be any of the followings:
  - Fn::And
  - Fn::Equals
  - Fn::If
  - Fn::Not
  - Fn::Or

# Fn::GetAtt
- Attributes are attached to any resources you create
- To know the attributes of your resources, the best place to look at is the docs

# Metadata Overview
- You can use the optional metadata section to include arbitrary YAML that provide details about the template or resource
- There are 3 metadata keys that have special meaning:
  - AWS::CloudFormation::Designer
  - AWS::CloudFormation::Interface 
    - Define grouping and ordering of input paramenter when they are displayed in the AWS Console
  - AWS::CloudFormation::Init
    - Degine configuration tasks for cfn-init. It's the most powerful usage of the metadata.

# AWS::CloudFormation::Designer Hands On
# AWS::CloudFormation::Interface Hands On

# EC2 User Data Overview
- Many of the CF templates will be about provisioning computing resources in your AWS Cloud
- Usually, you want the instances to be self configured so that they can perform the job they are supposed to perform
- You can fully automate your EC2 fleet state with CF Init

- EC2 User Data
  - We want to make sure that a new EC2 instance has php and mysql installed on it
  - we're going to write a user-data script

# CF EC2 User Data
- Use Fn::Base64

# CF Init Overview
- Problems with EC2 User Data
  - What if we want to have a very large instance configuration?
  - What if we want to evolve the state of the EC2 instance without terminating it and creating a new one?
  - How do we make EC2 user-data more readable?
  - How do we know or signal that our Ec2 user-data script actually completed successfully?

- CF helper Scripts
  - We have 4 python scripts, that come directly on Amazon Linux AMI, or can be installed using yum on non Amazon Linux
    - cfn-init: used to retrieve and interpret the resource metadata, installing packages, creating files and starting services
    - cfn-signal: A simple wrapper to signal an AWS CF CreationPolicy or WaitCondition, enabling you to synchronize other resource in the stack with the application being ready
    - cfn-get-metadata: A wrapper script making it easy to retrieve either all metadata defined for a resource or path to a specific key or subtree of the resource metadata
    - cfn-hup: A daemon to check for updates to metadata and execute custom hooks when the changes are detected
  - Usual flow : cfn-init, then cfn-signal, then optionally cfn-hup

- config contains the following and is executed in that order
  - packages
  - groups
  - users
  - sources
  - files
  - commands
  - services


# Fn::Sub
- Fn::Sub or !Sub

# cfn-init and cfn-signla
- We use cfn-init first to launch the configuration
- we use cfn-signal when the configuration has completed, which will let CF know that the resource creation has been successful
- This has to be used in conjunction of a CreationPolicy

# CF Drift
- CF allows you to create infrastructue
- But it doesn't protect you against manual configuration changes

# Nested Stacks Overview
- They allow you to isolate repeated patterns / common components in separate stacks and call them from other stacks
- Example
  - Load Balancer configuration that is re-used

# Nested Stacks
- ecs-refarch-cloudformation

# Troposphere to template CF using Python

# CloudFormer, Former2