export type SetupOptions = {
  force: boolean;
};

const DefaultSetupOptions: SetupOptions = {
  force: true,
};

function setup(opts?: SetupOptions): void {
  opts = opts ?? DefaultSetupOptions;
}

export default { setup };
