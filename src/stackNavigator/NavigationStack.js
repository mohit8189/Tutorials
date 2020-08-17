
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import RootComp from '../components/RootComp'
import ThirdComp from '../components/ThirdComp'
import FourthComp from '../components/FourthComp'


const AppNavigator = createStackNavigator(
    {
        Root: RootComp,
        Third: ThirdComp,
        Fourth: FourthComp
    },

    {
        initialRouteName: 'Root'
    },
)

export const AppContainer = createAppContainer(AppNavigator)