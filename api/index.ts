import axiosInstance from './axiosInstance';
import {baseUrl, RIA_API_KEY} from './config';
import RegistationFormValues from "../interfaces/forms/RegistationFormValues";
import LoginFormValues from "../interfaces/forms/LoginFormValues";

const testRiaRequest = async () => {
    const result = await axiosInstance.get(`${baseUrl}auto/used/autos?api_key=${RIA_API_KEY}`);
    return result.data;
};

const testLogngRiaRequest = async () => {
    const result = await axiosInstance.get(
        `${baseUrl}auto/search?api_key=${RIA_API_KEY}&category_id=1&bodystyle[0]=3&bodystyle[4]=2&marka_id[0]=79&model_id[0]=0&s_yers[0]=2010&po_yers[0]=2017&marka_id[1]=84&model_id[1]=0&s_yers[1]=2012&po_yers[1]=2016&brandOrigin[0]=276&brandOrigin[1]=392&price_ot=1000&price_do=60000&currency=1&auctionPossible=1&with_real_exchange=1&with_exchange=1&exchange_filter[marka_id]=0&exchange_filter[model_id]=0&state[0]=1&city[0]=0&state[1]=2&city[1]=0&state[2]=10&city[2]=0&abroad=2&custom=1&auto_options[477]=477&type[0]=1&type[1]=2&type[3]=4&type[7]=8&gearbox[0]=1&gearbox[1]=2&gearbox[2]=3&engineVolumeFrom=1.4&engineVolumeTo=3.2&powerFrom=90&powerTo=250&power_name=1&countpage=50&with_photo=1`
    );
    return result.data;
};

const findMotoWorldAdverbs = async () => {
    const result = await axiosInstance.get(
        `${baseUrl}auto/search?api_key=${RIA_API_KEY}&category_id=2&state=4&city=4&sellerType=2`
    );
    return result.data;
};

const infoById = async ({ id }: { id: string }) => {
  const result = await axiosInstance.get(
      `${baseUrl}auto/info?api_key=${RIA_API_KEY}&auto_id=${id}`
  );
    return result.data;
};

const registrationUser = async (registrationForm: RegistationFormValues) => {
    console.log('registration form ', registrationForm);
    // todo Axios call
};
const loginUser = async (loginForm: LoginFormValues) => {
    console.log('login form ', loginForm);
    // todo Axios call
};

export { testRiaRequest, testLogngRiaRequest, infoById, findMotoWorldAdverbs, registrationUser, loginUser };
