import axios from 'axios';
import _ from 'lodash';

interface SavingGoalDetail {
    savingsGoalUid: string;
    name: string;
    totalSaved: TotalSaved;
}

interface TotalSaved {
    currency: string;
    minorUnits: number;
}

interface RoundUpResponse {
    isUnexpectedError: boolean;
    data: SavingGoalDetail | null;
}

export const retrieveRoundUp = async (accountUid: string): Promise<RoundUpResponse> => {

    return axios.get(`/accountUid/${accountUid}`)
        .then((response) => response.data)
        .catch((error) => {
        throw {
            response: {
                status: _.get(error, 'response.status'),
                data: _.get(error, 'response.data'),
            },
            code: _.get(error, 'code'),
            message: _.get(error, 'message'),
        };
    });
}
