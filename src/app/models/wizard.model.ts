
export interface ComponentDetails {
    personalDetailsComponent: Component;
    contactDetailsComponent: Component;
    skillsComponent: Component;
    workExperienceComponent: Component;
    confirmationComponent: Component;
}

export interface Component {
    name?: string;
    active: boolean;
}

export interface WizardFormData {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    country: string;
    skills: {
        skill1: string,
        skill2: string,
        skill3: string
    };
    experiences: {
        experience1: string,
        experience2: string,
        experience3: string
    };
}