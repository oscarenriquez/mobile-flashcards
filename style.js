import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        padding: 50,
        backgroundColor: "#fff"
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        textAlign: "center",
        fontWeight: "700",
        fontSize: 22
    },
    textBigger: {
        fontSize: 34,
        marginBottom: 18
    },
    caption: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 16,
        color: "#808080"
    },
    actions: {
        marginTop: 50
    },
    button: {
        marginTop: 5,
        paddingTop: 15
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingRight: 6,
        paddingLeft: 6,
        fontSize: 18,
        marginBottom: 5
    }
})

export default style