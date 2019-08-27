# ==== EXAMPLE OF PREPROC FUNCTIONS SCRIPT ========

import pandas as pd
import numpy as np

# to divide train and test set
from sklearn.model_selection import train_test_split

# feature scaling
from sklearn.preprocessing import StandardScaler

# to build the models
from sklearn.linear_model import LinearRegression, Lasso

# to evaluate the models
from sklearn.metrics import mean_squared_error


# Procedural programming, getting all parameters from yaml file

def load_data(df_path):
    return pd.read_csv(df_path)


def divide_train_test(df, target):
    X_train, X_test, y_train, y_test = train_test_split(df, df[target],
                                                        test_size=0.2,
                                                        # remember the importance of seeeds all along!!!!
                                                        random_state=0)
    return X_train, X_test, y_train, y_test


def remove_numerical_na(df, var, mean_val):
    return df[var].fillna(mean_val)


def remove_categorical_na(df, var):
    return df[var].fillna('Missing')


def cap_outliers(df, var, cap, bigger_than=False):
    if bigger_than:
        capped_var = np.where(df[var]>cap, cap, df[var])
    else:
        capped_var = np.where(df[var]<cap, cap, df[var])
        
    return capped_var


def transform_skewed_variables(df, var):
    return np.log(df[var])


def remove_rare_labels(df, var, frequent_labels):
    return np.where(df[var].isin(frequent_labels, df[var], 'Rare'))


def train_scaler(df, output_path):
    scaler = StandardScaler()
    scaler.fit(df)
    joblib.save(scaler, output_path)
    return scaler
    
def scale_features(df, scaler):
    scaler = load(scaler) # with joblib probably
    return scaler.transform(df)


def train_model(df, target, features, scaler, output_path):
    lin_model = Lasso(random_state=2909)
    lin_model.fit(scaler.transform(df[features]), target)
    joblib.save(lin_model, output_path)
    return lin_model

def predict(df, model, features, scaler):
    return model.predict_proba(scaler.transform(df[features]))

# in case you want to include feature selection in the pipeline
#def train_feature_selector(df, output_path):
#    selector = sklearn_selector()
#    selector.fit(df)
#    joblib.save(selector, output_path)
#    return selector
    
###### END