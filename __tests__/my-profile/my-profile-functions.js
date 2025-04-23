export async function customerProfileButton(page) {
    await page.locator('.side-menu-container--menu--table--entry.my_profile-option').click();
}
export async function myProfileDisabledField(page,expect) {
    const fields = [
        '#firstName',
        '#lastName',
        '#address',
        '#city',
        '#zipCode'
    ];
    for (const text of fields) {
        const disabledField = page.locator('pce-my-profile').locator(`${text}`);
        await expect(disabledField).toBeDisabled();
    }

    const disabledStateDropdown = page.locator('pce-my-profile').locator('button[role="combobox"]');
    await expect(disabledStateDropdown).toBeDisabled();
}
export async function clickEditProfileButton(page) {
    const editProfileButton = page.locator('pce-my-profile').getByText('Edit Profile');
    await editProfileButton.click();
    return editProfileButton;
}
export async function fillMyProfileFields(page, field, input) {
    const profileField = page.locator('pce-my-profile').locator(field);
    await profileField.fill(input);
}
export async function saveChangesButton(page) {
    const saveButton = page.getByRole('button', { name: 'Save changes' });
    await saveButton.click();
    return saveButton;
}