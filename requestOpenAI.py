from openai import OpenAI
import time
client = OpenAI(api_key="...")
 
 
def completion(msg):
    ASSISTANT_ID="asst_YAL99pcWX17Qun3bsBMlUKdp"
    thread = client.beta.threads.create(
        messages=[
            {"role":"user","content":msg}
        ]
    )
    run = client.beta.threads.runs.create(thread_id=thread.id,assistant_id=ASSISTANT_ID)
    #print("run created : {run.id}")
    #wait for run to complete it
    while run.status != "completed":
        run = client.beta.threads.runs.retrieve(thread_id=thread.id,run_id=run.id)
        #print("run status : {run.status}")
        time.sleep(1)
    else:
        #print("run completed")
        pass
    message_response = client.beta.threads.messages.list(thread.id)
    last = message_response.data[0]
    return str(last.content[0].text.value)