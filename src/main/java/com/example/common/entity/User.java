package com.example.common.entity;


import com.example.common.Role;

import javax.persistence.*;


@Entity
@Table(name = "user")
public class User extends BaseEntity {

    @Column(nullable = false)
    private String fullName;

    @Column(unique = true)
    private String pseudonym;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private Long facebookId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role = Role.ROLE_INHABITANT;

    @Column(nullable = false)
    private Boolean isActive = Boolean.FALSE;

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPseudonym() {
        return pseudonym;
    }

    public void setPseudonym(String pseudonym) {
        this.pseudonym = pseudonym;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }

    public Long getFacebookId() {
        return facebookId;
    }

    public void setFacebookId(Long facebookId) {
        this.facebookId = facebookId;
    }
}
