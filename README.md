# Landing Page

This is an experimental project. This is my first time using TypeScript, along with trying out different ways to style my page.

## Styling

The way I'm styling my elements is using inline-styles. However, not in JSX, but creating a seperate TypeScript file and creating objects to import styles.

My goal here is to find ways to be increasingly efficient, write less code, make them re-usable, etc.

### `Media Queries`

One problem I came across is 'how am I going to make this Responsive just using React?'. In CSS, you just use @media. With the help of the internet and some thinking, I came up with a useMedia hook. This hook allows the styles I created to change depending on the screen size. You can check the file above in 'hooks'. If you want something to display on a certain viewport, but nothing else, you simply place 'undefined' as the other argument in styles.
