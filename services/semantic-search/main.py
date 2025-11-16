# main.py

import chromadb
from google.cloud import pubsub_v1

# Initialize ChromaDB client
client = chromadb.Client()

# Create or get a collection
collection = client.get_or_create_collection("cbe_collection")

# Initialize Pub/Sub subscriber client
subscriber = pubsub_v1.SubscriberClient()
# Replace 'your-project-id' and 'your-subscription-name' with your actual project ID and subscription name
subscription_path = subscriber.subscription_path('your-project-id', 'your-subscription-name')

def callback(message):
    """Callback function to process messages from Pub/Sub."""
    print(f"Received message: {message.data}")
    # Here you would process the message, which should contain the CBE data and vectorize it.
    # For this placeholder, we'll just print the message.
    
    # After processing, you would add the vectorized data to ChromaDB.
    # For example:
    # collection.add(
    #     documents=[cbe_markdown_content],
    #     metadatas=[{"source": "cbe"}],
    #     ids=[cbe_id]
    # )
    
    message.ack()




if __name__ == '__main__':
    # The subscriber is non-blocking, so we need to keep the main thread alive.
    streaming_pull_future = subscriber.subscribe(subscription_path, callback=callback)
    print(f"Listening for messages on {subscription_path}..")

    # Keep the main thread alive to allow the subscriber to run in the background.
    try:
        # The `result()` method will block indefinitely, waiting for the stream to catch up or break.
        streaming_pull_future.result()
    except (Exception, KeyboardInterrupt):
        streaming_pull_future.cancel()
