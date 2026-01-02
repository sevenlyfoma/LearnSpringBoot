// demo/src/main/java/com/infoworld/demo/HelloController.java

// From https://www.infoworld.com/article/4100488/spring-boot-tutorial-get-started-with-spring-boot.html

package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String hello() {
        return "Hello, World!\n";
    }

}