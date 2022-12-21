import { Composer } from "grammy/mod.ts";

import start from "./start.ts";
import cloner from "./cloner.ts";
import help from "./help.ts";
import details from "./details.ts";
import callbacks from "./callbacks.ts";

const composer = new Composer();

composer.use(start);
composer.use(cloner);
composer.use(help);
composer.use(details);
composer.use(callbacks);

export default composer;
