import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';

const vpc = new aws.ec2.Vpc('custom-vpc', {
  cidrBlock: '10.0.0.0/16',
});

// ...

export const vpcId = vpc.id;
