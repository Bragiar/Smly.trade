# Lokaverkefni í Rafmyntum
### Nafn og netfang höfunda

- Bragi Arnarson
    - (bra26@hi.is)
- Orri Martinez
    - (orm2@hi.is)

## Lýsing á Verkefni

Verkefnið er endurbætt útgáfa af vefsíðunni smly.trade

Á endurbættu vefsíðunni er ein forsíða og tvær undirsíður.

Undiríðurnar eru
- Introduction (Útskýrir betur hvað SmileyCoin er)
- Get started (Útskýrir nokkrar leiðir hvernig maður eignast SmileyCoin)

Á forsíðunni er haus sem inniheldur linka yfir á hinar undirsíðurnar og einnig "live price tracker" sem fær beint verð SmileyCoin. Við útfærðum það með hjálp þessarar síðu: https://min-api.cryptocompare.com/
Einnig eru helstu upplýsingar um SmileyCoin á forsíðunni og við settum einnig Twitter news feedið frá @smileyCoinNews á forsíðuna.

[Smelltu hér ](https://smlytrade.herokuapp.com/) til að komast á slóð verkefnisins keyrandi á vef.  

Við notuðum React javascript libraryið til þess að byggja upp síðuna



# Upplýsingar um hvernig skuli keyra verkefnið

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Information on how to run Smly.trade for production use on server

## 1. Build the project with npm run build

It builds the app and should make a build folder

## 2. Install pm2 globally
#### `sudo npm install -g pm2`

## 3. Add this deploy script to your to your scripts in the package.json file

#### `deploy": "pm2 start ./server.sh --name yourAppName",`

## 4. Then in the same directory as the package.json, create an executable server.sh:
#### `echo "Serving yourAppName!"
#### `serve -s build #(serve -s build -l 80) for deploying on port 80 `

Don't forget to make server.sh an executable by running:
#### `chmod +x server.sh`

## 5. Deploy your app by using: (might have to use sudo)
#### `npm run deploy`

## 6. To make the server start on boot read: http://pm2.keymetrics.io/docs/usage/startup/
