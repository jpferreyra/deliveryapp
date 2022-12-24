import AsyncStorage from "@react-native-async-storage/async-storage"

export const LocalStorage = () => {
    const save = async (key:string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('Error en LOCAL STORAGE:', error);
        }
    }
    const get = async (key:string) => {
        try {
            return await AsyncStorage.getItem(key);
        } catch (error) {
            console.log('Error en LOCAL STORAGE:', error);
        }
    }

    const remove = async (key:string) => {
        try {
            return await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log('Error en LOCAL STORAGE:', error);
        }
    }

    return {
        save,
        get,
        remove
    }
}