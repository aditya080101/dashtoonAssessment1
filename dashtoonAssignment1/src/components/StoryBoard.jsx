import React, { useState, useEffect } from 'react';

export default function StoryBoard({ prompts }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imagesArray = await Promise.all(
          prompts.map(async (prompt) => {
            try {
              const response = await fetch(
                "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
                {
                  headers: {
                    Accept: "image/png",
                    Authorization:
                      "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
                    "Content-Type": "application/json",
                  },
                  method: "POST",
                  body: JSON.stringify({ inputs: prompt }),
                }
              );

              if (!response.ok) {
                throw new Error(`Failed to fetch image data for prompt: ${prompt}`);
              }

              const result = await response.blob();
              const imgUrl = URL.createObjectURL(result);

              // Update the state for each image as it is fetched
              setImages((prevImages) => [...prevImages, imgUrl]);
            } catch (error) {
              console.error(`Error fetching image for prompt: ${prompt}`, error.message);
            }
          })
        );
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [prompts]);

  return (
    <div className='content'>
      <h2>Story Board</h2>
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Fetched Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}