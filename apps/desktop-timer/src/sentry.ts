import { init, IPCMode } from '@sentry/electron';

import { environment } from './environments/environment';

export function initSentry() {
	if (environment.SENTRY_DSN) {
		init({
			dsn: environment.SENTRY_DSN,
			debug: true,
			ipcMode: IPCMode.Both
		});
	}
}
