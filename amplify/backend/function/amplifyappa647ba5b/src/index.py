import json
from dateutil.parser import parse

def handler(event, context):
  print('received event:')
  print(event)
  date_str = "2023-09-01 13:30:00"
  dt = parse(date_str)
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps('aaa Hello from your new Amplify Python lambda!: ' + dt)
  }