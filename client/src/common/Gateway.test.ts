import {retrieveRoundUp} from "./Gateway";

describe('Gateway', () => {
    const apiResponse = 'ok!';
    const accountUid = 'some-account-uid';

    it('should retrieve api response with correct params', async () => {
        jest.fn(() => Promise.resolve(apiResponse));

        await retrieveRoundUp(accountUid).then((response: unknown) => {
            expect('').toHaveBeenCalledWith(`/accountUid/${accountUid}`);
            expect(response).toEqual({isUnexpectedError: false, data: apiResponse});
        });
    });
});
