export default class TabApp extends Application {
    constructor(steps) {
        super();
        this.actor = undefined;
        this.steps = steps;
    }

    static get defaultOptions() {
        const options = super.defaultOptions;
        options.template = 'modules/ffg-star-wars-enhancements/templates/tab_app/base.html';
        options.width = 720;
        options.height = 680;
        options.resizable = true;
        return options;
    }

    async getData() {
        return {"key": "more content goes here", steps: this.steps}
    }

    activateListeners() {
        // listeners specific for each tab
        for (const step of this.steps) {
            //step.setListeners();
        }
        // set listeners for tab navigation
        $('[data-tab_app-index]').on('click', (event) => {
            this.currentTab = $(event.target).data('tab_app-index');
            this.openTab(this.currentTab);
        });
        $('[data-tab_app-back]').on('click', () => {
            this.currentTab--;
            this.openTab(this.currentTab);
        });
        $('[data-tab_app-next]').on('click', () => {
            this.currentTab++;
            this.openTab(this.currentTab);
        });
        $('[data-tab_app-submit]').on('click', () => this.confirmSubmittion());

        //this.openTab(-1);
    }

    openTab(index) {
        handleNavs(index);
        $('.tab-body').hide();
        $('.tablinks').removeClass('active');
        $(`[data-tab_app-index=${index}]`).addClass('active');
        $(`[data-ffgcc_tab_section=${index}]`).show();
        switch (index) {
            case StepIndex.Spells:
                this.steps[StepIndex.Spells].update({class: this.steps[StepIndex.Class].getUpdateData()});
                break;
            case StepIndex.Abilities:
                this.steps[StepIndex.Abilities].update();
                break;
        }
    }

}