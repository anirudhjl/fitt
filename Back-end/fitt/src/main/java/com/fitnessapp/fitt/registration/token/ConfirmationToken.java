package com.fitnessapp.fitt.registration.token;

import com.fitnessapp.fitt.appuser.AppUser;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class ConfirmationToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String token;
    @Column(nullable = false)
    private String createdAt;
    private String confirmedAt;

    @ManyToOne
    @JoinColumn(nullable = false, name = "app_user_id")
    private AppUser appUser;



    public ConfirmationToken(String token, String createdAt, AppUser appUser) {
        this.token = token;
        this.createdAt = createdAt;
        this.appUser = appUser;
    }
}
