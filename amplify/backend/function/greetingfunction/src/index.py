import json
import datetime
from dateutil.relativedelta import relativedelta

def handler(event, context):

  current_time = datetime.datetime.now()
  next_month_time = current_time + relativedelta(months=+1)

  body = {
      'message': 'bbbbb Hello, the current time is ' + str(next_month_time)
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