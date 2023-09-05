import json
import datetime

def handler(event, context):

  current_time = datetime.datetime.now()

  body = {
      'message': 'aaa Hello, the current time is ' + str(current_time)
  }

  response = {
      'statusCode': 200,
      'body': json.dumps(body),
      'headers': {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
  }
  
  return response