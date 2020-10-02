import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screen/HomeScreen";
import Profile from "./src/screen/MyProfile";
import SemesterWiseCourseList from "./src/screen/SemesterWiseCourseList";
import Semester1 from "./src/screen/Semester1";
import Semester2 from "./src/screen/Semester2";
import Semester3 from "./src/screen/Semester3";
import FacultyList from "./src/screen/FacultyList";


const stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="Home">
                <stack.Screen name="Home" component={HomeScreen} />
                <stack.Screen name="Semesters" component={SemesterWiseCourseList} />
                <stack.Screen name="Profile" component={Profile} />
                <stack.Screen name="CourseList of First Semester" component={Semester1} />
                <stack.Screen name="CourseList of Second Semester" component={Semester2} />
                <stack.Screen name="CourseList of Third Semester" component={Semester3} />
                <stack.Screen name="Faculty List" component={FacultyList} />
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
