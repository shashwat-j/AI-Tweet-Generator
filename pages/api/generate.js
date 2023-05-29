import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `write a viral twitter thread optimized to get good engagement on the topic: `;
const generateAction = async (req, res) => {

  // const baseCompletion = await openai.createCompletion({
  //   model: 'text-davinci-003',
  //   prompt: `${basePromptPrefix}${req.body.userInput}\n`,
  //   temperature: 0.85,
  //   max_tokens: 250,
  // });
  
  // const basePromptOutput = baseCompletion.data.choices.pop();

  const baseCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: `${basePromptPrefix} ${req.body.userInput}`}],
    temperature: 0.8
  });
  
  const basePromptOutput = baseCompletion.data.choices[0].message.content;
  console.log(baseCompletion.data.choices[0].message.content)

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;