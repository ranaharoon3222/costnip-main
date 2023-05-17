import React, { useState } from 'react';
import axios from 'axios';
import Typewriter from 'typewriter-effect';

const Chat = () => {
  const [userMessages, setUserMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    setUserMessages((prev) => [...prev, message]);
    setMessage('');

    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    };
    const prefix =
      'do not answer or complete my question if it not related to healthcare topics : Create a healthcare chatbot that can answer general health-related questions, provide basic advice, and offer resources for further information. The chatbot should be able to understand user input in natural language, respond appropriately, and maintain a conversational tone.';
    const payload = {
      model: 'text-davinci-002',
      prompt: prefix + responses?.join('\n') + '\n' + message,
      temperature: 0.7,
      max_tokens: 400,
      top_p: 0.5,
      frequency_penalty: 0,
      presence_penalty: 0,
    };

    try {
      const res = await axios.post(
        'https://api.openai.com/v1/completions',
        payload,
        config
      );
      const chatbotResponse = res.data.choices[0].text;
      console.log(chatbotResponse, 'res');
      setResponses((prev) => [...prev, chatbotResponse]);
    } catch (error) {
      console.error(error);
      setResponses('An error occurred while fetching the response.');
    }
  };

  return (
    <>
      <section className='h-[500px] overflow-y-scroll '>
        {userMessages?.map((item, i) => (
          <div key={item + i}>
            <div className='chat chat-end'>
              <div className='text-black bg-gray-300 chat-bubble'> {item} </div>
            </div>

            {responses[i]?.length > 0 ? (
              <div className='chat chat-start'>
                <div className='chat-bubble bg-[#132758]'>
                  <Typewriter
                    options={{
                      strings: responses[i],
                      autoStart: true,
                      delay: 20,
                      cursor: '',
                    }}
                  />
                </div>
              </div>
            ) : (
              <>
                {' '}
                <button className='btn btn-square bg-[#132758] loading'></button>
              </>
            )}
          </div>
        ))}
      </section>
      <form onSubmit={handleSubmit}>
        <div className='flex border border-[#132758] rounded-md shadow-md'>
          <input
            type='text'
            onChange={handleChange}
            value={message}
            placeholder='Any question about Health Care?'
            name='message'
            className='block w-full px-4 py-3 text-sm border-gray-200 shadow-sm outline-none focus:border-none rounded-l-md focus:z-10 '
          />
          <button
            type='submit'
            className='inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md border border-transparent font-semibold bg-[#132758] text-white   focus:outline-none   transition-all text-sm'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={16}
              height={16}
              viewBox='0 0 24 24'
              className='w-4 h-4'
              fill='#fff'
            >
              <path d='M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z' />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
};

export default Chat;
