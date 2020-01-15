import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({
    host: '192.168.1.17',
}) // controls connection & communication settings
    .useReactNative({})
    .use(reactotronRedux())
    .setAsyncStorageHandler()
    .connect(); // let's connect!

export default reactotron;
