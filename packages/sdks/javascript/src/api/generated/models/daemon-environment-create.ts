/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface DaemonEnvironmentCreate
 */
export interface DaemonEnvironmentCreate {
    /**
     * The command line to be executed to start the daemon. Must not be greater than 255 characters.
     * @type {string}
     * @memberof DaemonEnvironmentCreate
     */
    command: string;
    /**
     * The number of daemon process instances of the program to run simultaneously. Must be at least 1. Must not be greater than 99.
     * @type {number}
     * @memberof DaemonEnvironmentCreate
     */
    process_count: number;
    /**
     * The working directory where the daemon will be relative to when performing disk i/o. Must start with one of <code>/</code>.
     * @type {string}
     * @memberof DaemonEnvironmentCreate
     */
    working_directory: string;
    /**
     * The name of the Unix user on behalf of which the daemon will run. Must not be greater than 60 characters.
     * @type {string}
     * @memberof DaemonEnvironmentCreate
     */
    run_as_user: string;
    /**
     * The name entered by the user (or auto-generated by `devopness`) to uniquely identify the daemon. Must contain only letters, numbers, dashes and underscores. Must not be greater than 60 characters.
     * @type {string}
     * @memberof DaemonEnvironmentCreate
     */
    name: string;
    /**
     * List of valid resource IDs
     * @type {Array<number>}
     * @memberof DaemonEnvironmentCreate
     */
    servers: Array<number>;
}

