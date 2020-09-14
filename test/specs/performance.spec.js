describe('Ultimate QA Home Page', () => {
    it('should login with valid credentials', () => {
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


