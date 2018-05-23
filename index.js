import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';


//Removing yellow messages due to bugs by React upgrade
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Class RCTCxxModule was not exported. Did you forget to use RCT_EXPORT_MODULE()?', 'Module RCTImageLoader']);


AppRegistry.registerComponent('CAA', () => App);
