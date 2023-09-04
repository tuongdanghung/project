import axios from "../config/axios";
export const apiGetPublicProvinces = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: 'https://vapi.vnappmob.com/api/province/'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPublicDistrict = (provinceId: any) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: `https://vapi.vnappmob.com/api/province/district/${provinceId}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPublicWard = (districtId: any) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: `https://vapi.vnappmob.com/api/province/ward/${districtId}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})