/**
 * QCObjects CLI 0.1.x
 * ________________
 *
 * Author: Jean Machuca <correojean@gmail.com>
 *
 * Cross Browser Javascript Framework for MVC Patterns
 * QuickCorp/QCObjects is licensed under the
 * GNU Lesser General Public License v3.0
 * [LICENSE] (https://github.com/QuickCorp/QCObjects/blob/master/LICENSE.txt)
 *
 * Permissions of this copyleft license are conditioned on making available
 * complete source code of licensed works and modifications under the same
 * license or the GNU GPLv3. Copyright and license notices must be preserved.
 * Contributors provide an express grant of patent rights. However, a larger
 * work using the licensed work through interfaces provided by the licensed
 * work may be distributed under different terms and without source code for
 * the larger work.
 *
 * Copyright (C) 2015 Jean Machuca,<correojean@gmail.com>
 *
 * Everyone is permitted to copy and distribute verbatim copies of this
 * license document, but changing it is not allowed.
*/
/*eslint no-unused-vars: "off"*/
/*eslint no-redeclare: "off"*/
/*eslint no-empty: "off"*/
/*eslint strict: "off"*/
/*eslint no-mixed-operators: "off"*/
/*eslint no-undef: "off"*/
"use strict";
const fs = require("fs");
const os = require("os");
const { exec,execSync } = require("child_process");


Package("com.qcobjects.backend.microservice.mockup",[
  Class("MockupMicroservice",BackendMicroservice,{
    body:null,
    tempFileName: "",
    get:function (){
      var microservice = this;
      microservice.headers = microservice.route.responseHeaders;
      microservice.body = microservice.route.response;
      microservice.done();
    },
    post:function (data){
      var microservice = this;
      microservice.headers = microservice.route.responseHeaders;
      microservice.body = microservice.route.response;
      microservice.done();
    },
    finishWithBody: function(stream) {
      try {
        if (typeof this.body == "string"){
          stream.write(this.body);
        } else {
          stream.write(_DataStringify(this.body));
        }
        stream.end();
      } catch (e) {
        logger.debug("Something wrong writing the response for microservice" + e.toString());
      }
    },
    done: function() {
      var microservice = this;
      var stream = microservice.stream;
      stream.respond(microservice.headers);
      if (microservice.body != null) {
        microservice.finishWithBody.call(microservice, stream);
      }
    }

  }),
  Class("Microservice",MockupMicroservice)
]);
