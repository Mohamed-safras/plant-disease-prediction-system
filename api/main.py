from keras.utils import load_img
from fastapi import FastAPI, File, UploadFile
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf

app = FastAPI()

MODEL = tf.keras.models.load_model("../saved_models/1")

CLASS_NAMES = ['algal_spot', 'brown_blight', 'gray_blight', 'healthy', 'helopeltis', 'red_spot']


def read_file_as_image(data):
    image = np.array(Image.open(BytesIO(data), mode="r"))
    # real image
    img = Image.fromarray(image)
    img.save("Image_from_array.png")


@app.post("/predict")
async def predict(
        file: UploadFile = File(...)
):
    read_file_as_image(await file.read())
    image = load_img("Image_from_array.png", target_size=(180, 180))
    img_batch = np.expand_dims(image, 0)
    predictions = MODEL.predict(img_batch)
    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    print(predicted_class,confidence)
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8080)