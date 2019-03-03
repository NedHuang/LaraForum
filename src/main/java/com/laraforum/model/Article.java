package com.laraforum.model;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * relationship between user and article: use logic
 * relationship between article and tag: use @manytomany
 */
@Builder
@Getter
@Setter
@Data
@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NonNull
    private String slug;

    @NonNull
    private String title;

    @NonNull
    private String description;

    @NonNull
    private String body;

    // TODO
    // https://stackoverflow.com/questions/2302802/object-references-an-unsaved-transient-instance-save-the-transient-instance-be/2302814
    // About manytomany and manytoone , still a lot to watch
    @NonNull
    @OneToMany(cascade = {CascadeType.ALL})
    // refer: https://projectlombok.org/features/Builder
    private List<Tag> tagList = new ArrayList<>();

    @NonNull
    private Date createdAt;

    @NonNull
    private Date updatedAt;

    // TODO Do we need to use final ?
    @Builder.Default
    private final boolean favorited = false;

    @Builder.Default
    private final int favoritesCount = 0;

    @NonNull
    private int userId;
}