import { BaseNode } from './baseNode';
import { loggerNodeConfig } from './nodeConfigs/loggerConfig';

export const LoggerNode = (props) => <BaseNode {...props} config={loggerNodeConfig} />;
