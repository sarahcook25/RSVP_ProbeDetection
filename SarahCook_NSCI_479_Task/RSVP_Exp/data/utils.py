import pandas as pd
import numpy as np
from scipy.stats import norm
from statsmodels.formula.api import ols
from tqdm.notebook import tqdm
from itertools import zip_longest

import pandas as pd
import numpy as np
from scipy.stats import norm
from statsmodels.formula.api import ols
from tqdm.notebook import tqdm
from itertools import zip_longest

def calc_performance(subj_ID, data_all):
    """
    Calculate the baseline performance overall, useful for excluding participants with below chance performance
    :param subj_ID: the participant-unique ID
    :param data_all: the dataframe containing the individual participants' trial-level responses
    :return: a participant's performance measures (hit, false alarm, dprime) for each duration for both probe and image
    """
    # Subset for the current participant
    curr_sub_df = data_all[data_all['observation'] == subj_ID]


    # Initialize the dataframe to store the results
    curr_perf_df = pd.DataFrame(columns=['sub', 'duration', 'hit', 'fa', 'dprime', 'response_type', 'probe_hit', 'probe_fa', 'probe_dprime'])

    # Separate the data based on the 'sender' column for image and probe responses
    image_data = curr_sub_df[curr_sub_df['sender'] == 'Test_no_img']
    probe_data = curr_sub_df[curr_sub_df['sender'] == 'Test_probe']


    for duration in [34, 84, 167]:
        curr_img_yes = image_data[
            (image_data['duration'] == duration) &
            (image_data['trial_type'] == 'YES')
        ]
        curr_img_no = image_data[
            (image_data['duration'] == duration) &
            (image_data['trial_type'] == 'NO')
        ]

        img_hit = np.nan
        img_fa = np.nan

        if len(curr_img_yes) > 0:
            img_hit = np.round(np.sum(curr_img_yes['response'] == 'YES') / len(curr_img_yes), 3)

        if len(curr_img_no) > 0:
            img_fa = np.round(np.sum(curr_img_no['response'] == 'YES') / len(curr_img_no), 3)

        img_dprime = np.nan
        if not np.isnan(img_hit) and not np.isnan(img_fa):
            try:
                img_dprime = np.round(norm.ppf(img_hit) - norm.ppf(img_fa), 3)
            except:
                img_dprime = np.nan

        curr_perf_df.loc[len(curr_perf_df)] = {
            'sub': subj_ID,
            'duration': duration,
            'hit': img_hit,
            'fa': img_fa,
            'dprime': img_dprime,
            'response_type': 'image',
            'probe_hit': np.nan,
            'probe_fa': np.nan,
            'probe_dprime': np.nan
        }

    # --- Probe detection loop ---
    probe_yes_df = probe_data[probe_data['is_probe'] == 'YES']
    probe_no_df = probe_data[probe_data['is_probe'] == 'NO']

    probe_hit = np.nan
    probe_fa = np.nan


    for duration in [34, 84, 167]:
        probe_yes_df = probe_data[
            (probe_data['duration'] == duration) &
            (probe_data['is_probe'] == 'YES')
        ]
        probe_no_df = probe_data[
            (probe_data['duration'] == duration) &
            (probe_data['is_probe'] == 'NO')
        ]
        if len(probe_yes_df) > 0:
            probe_hit = np.round(np.sum(probe_yes_df['response'] == 'YES') / len(probe_yes_df), 3)

        if len(probe_no_df) > 0:
            probe_fa = np.round(np.sum(probe_no_df['response'] == 'YES') / len(probe_no_df), 3)

        probe_dprime = np.nan
        if not np.isnan(probe_hit) and not np.isnan(probe_fa):
            try:
                probe_dprime = np.round(norm.ppf(probe_hit) - norm.ppf(probe_fa), 3)
            except:
                probe_dprime = np.nan

        curr_perf_df.loc[len(curr_perf_df)] = {
            'sub': subj_ID,
            'duration': np.nan,
            'hit': np.nan,
            'fa': np.nan,
            'dprime': np.nan,
            'response_type': 'probe',
            'probe_hit': probe_hit,
            'probe_fa': probe_fa,
            'probe_dprime': probe_dprime
        }

    return curr_perf_df



def calc_paired_performance(subj_ID, data_all):
    curr_sub_df = data_all[data_all['observation'] == subj_ID].copy()
    curr_sub_df = curr_sub_df.sort_values('timestamp')  # Make sure trials are in order!

    results = []

    # Get all no_img block start indices
    no_img_indices = curr_sub_df[curr_sub_df['sender'] == 'Test_no_img'].index

    for idx in no_img_indices:
        # Get no_img block trials (you may need a block identifier — adjust here if available)
        img_block = curr_sub_df.loc[idx:idx]  # currently just the one row, maybe extend if block spans multiple rows
        duration = img_block.iloc[0]['duration']
        condition = img_block.iloc[0]['condition']

        img_yes_trials = img_block[img_block['trial_type'] == 'YES']
        img_no_trials = img_block[img_block['trial_type'] == 'NO']

        img_hit = np.round(np.sum(img_yes_trials['response'] == 'YES') / len(img_yes_trials), 3) if len(img_yes_trials) > 0 else np.nan
        img_fa = np.round(np.sum(img_no_trials['response'] == 'YES') / len(img_no_trials), 3) if len(img_no_trials) > 0 else np.nan

        # Find the next probe block after this
        probe_block = curr_sub_df[(curr_sub_df.index > idx) & (curr_sub_df['sender'] == 'Test_probe')]
        if probe_block.empty:
            continue  # no matching probe block

        probe_block = probe_block.iloc[0:1]  # just take the first probe row/block

        probe_yes_trials = probe_block[probe_block['is_probe'] == 'YES']
        probe_no_trials = probe_block[probe_block['is_probe'] == 'NO']

        probe_hit = np.round(np.sum(probe_yes_trials['response'] == 'YES') / len(probe_yes_trials), 3) if len(probe_yes_trials) > 0 else np.nan
        probe_fa = np.round(np.sum(probe_no_trials['response'] == 'YES') / len(probe_no_trials), 3) if len(probe_no_trials) > 0 else np.nan

        results.append({
            'sub': subj_ID,
            'duration': duration,
            'condition': condition,
            'image_hit': img_hit,
            'image_fa': img_fa,
            'probe_hit': probe_hit,
            'probe_fa': probe_fa
        })

    return pd.DataFrame(results)

import pandas as pd
import numpy as np
from scipy.stats import norm

def calc_performance_target(subj_ID, data_all):
    # Filter data for the current participant
    curr_sub_df = data_all[data_all['observation'] == subj_ID]
    
    # Ensure 'condition' is a string and handle NaNs
    curr_sub_df['condition'] = curr_sub_df['condition'].fillna('').astype(str)

    # Initialize the dataframe to store results
    curr_perf_df = pd.DataFrame(columns=['sub', 'condition', 'hit', 'fa', 'dprime', 'response_type', 'probe_hit', 'probe_fa', 'probe_dprime'])

    condition_list = curr_sub_df['condition'].unique()

    # Separate image data and probe data
    image_data = curr_sub_df[curr_sub_df['sender'] == 'Test_no_img']
    probe_data = curr_sub_df[curr_sub_df['sender'] == 'Test_probe']

    # Image detection performance
    for condition in condition_list:
        # Image detection trials
        curr_dur_df_yes = image_data[(image_data['condition'] == condition) & (image_data['trial_type'] == 'YES')]
        curr_dur_df_no = image_data[(image_data['condition'] == condition) & (image_data['trial_type'] == 'NO')]

        total_trials = len(curr_dur_df_yes) + len(curr_dur_df_no)

        # Calculate hit, false alarm for image detection
        if len(curr_dur_df_yes) > 0:
            curr_hit = np.round(np.sum(curr_dur_df_yes['response'] == 'YES') / len(curr_dur_df_yes), 3)
        else:
            curr_hit = np.nan

        if len(curr_dur_df_no) > 0:
            curr_fa = np.round(np.sum(curr_dur_df_no['response'] == 'YES') / len(curr_dur_df_no), 3)
        else:
            curr_fa = np.nan

        # Adjust hit and false alarm to avoid 0 or 1
        if curr_hit == 1:
            curr_hit = 1 - 1 / (2 * total_trials)
        elif curr_hit == 0:
            curr_hit = 1 / (2 * total_trials)

        if curr_fa == 1:
            curr_fa = 1 - 1 / (2 * total_trials)
        elif curr_fa == 0:
            curr_fa = 1 / (2 * total_trials)

        # Calculate dprime for image detection
        if not np.isnan(curr_hit) and not np.isnan(curr_fa):
            curr_dprime = np.round(norm.ppf(curr_hit) - norm.ppf(curr_fa), 3)
        else:
            curr_dprime = np.nan

        # Append the results for image detection
        curr_perf_df.loc[len(curr_perf_df)] = {
            'sub': subj_ID,
            'condition': condition,
            'hit': curr_hit,
            'fa': curr_fa,
            'dprime': curr_dprime,
            'response_type': 'image',
            'probe_hit': np.nan,
            'probe_fa': np.nan,
            'probe_dprime': np.nan
        }

    # Probe response performance
    for condition in condition_list:
        # Probe trials
        probe_yes_df = probe_data[(probe_data['condition'] == condition) & (probe_data['is_probe'] == 'YES')]
        probe_no_df = probe_data[(probe_data['condition'] == condition) & (probe_data['is_probe'] == 'NO')]

        total_trials_probe = len(probe_yes_df) + len(probe_no_df)

        # Calculate hit, false alarm for probe responses
        if len(probe_yes_df) > 0:
            probe_hit = np.round(np.sum(probe_yes_df['response'] == 'YES') / len(probe_yes_df), 3)
        else:
            probe_hit = np.nan

        if len(probe_no_df) > 0:
            probe_fa = np.round(np.sum(probe_no_df['response'] == 'YES') / len(probe_no_df), 3)
        else:
            probe_fa = np.nan

        # Adjust hit and false alarm to avoid 0 or 1
        if probe_hit == 1:
            probe_hit = 1 - 1 / (2 * total_trials_probe)
        elif probe_hit == 0:
            probe_hit = 1 / (2 * total_trials_probe)

        if probe_fa == 1:
            probe_fa = 1 - 1 / (2 * total_trials_probe)
        elif probe_fa == 0:
            probe_fa = 1 / (2 * total_trials_probe)

        # Calculate dprime for probe detection
        if not np.isnan(probe_hit) and not np.isnan(probe_fa):
            probe_dprime = np.round(norm.ppf(probe_hit) - norm.ppf(probe_fa), 3)
        else:
            probe_dprime = np.nan

        # Append the results for probe detection
        curr_perf_df.loc[len(curr_perf_df)] = {
            'sub': subj_ID,
            'condition': condition,
            'hit': np.nan,
            'fa': np.nan,
            'dprime': np.nan,
            'response_type': 'probe',
            'probe_hit': probe_hit,
            'probe_fa': probe_fa,
            'probe_dprime': probe_dprime
        }

    # Extract and split information from the 'condition' column
    def safe_split(k, idx):
        try:
            return k[idx]
        except IndexError:
            return np.nan

    curr_perf_df['duration'] = [safe_split(k, -1) for k in curr_perf_df['condition'].str.split('_')]
    curr_perf_df['property'] = curr_perf_df['condition'].str[:19]
    curr_perf_df['Dist'] = [safe_split(k, 1) for k in curr_perf_df['property'].str.split('_')]
    curr_perf_df['RE'] = [safe_split(k, 3) for k in curr_perf_df['property'].str.split('_')]

    # Drop rows where 'hit' or 'probe_hit' are NaN
    curr_perf_df = curr_perf_df.dropna(subset=['hit', 'probe_hit'], how='all')

    return curr_perf_df




def calc_performance_group(df, sub_list):
    """
    Takes a list of participants and calculates the baseline performance for each of them, separated by durations.
    Includes both image detection and probe detection performance.
    
    :param df: the dataframe containing the individual participants' trial-level responses
    :param sub_list: the list of participants to be included
    :return: a dataframe with performance measures from all the included participants for both image and probe responses.
    """
    counter = 0
    df_filtered = df[df['observation'].isin(sub_list)]  # Filter data to include only the selected participants
    
    # Loop through each participant in the list
    for curr_sub in sub_list:
        curr_df = calc_performance(curr_sub, df_filtered)  # Call calc_performance to get the individual participant's data
        
        if counter == 0:
            # Initialize the dataframe with the first participant's data
            counter += 1
            all_sub_df = curr_df
        else:
            # Use pd.concat to append the current participant's data to the overall dataframe
            all_sub_df = pd.concat([all_sub_df, curr_df], ignore_index=True)

    return all_sub_df


def calc_performance_target_group(df, sub_list):
    """
    Takes a list of participants and calculates the baseline performance for each of them, separated by conditions.
    Includes both image detection and probe detection performance for each condition.
    
    :param df: the dataframe containing the individual participants' trial-level responses
    :param sub_list: the list of participants to be included
    :return: a dataframe with performance measures for each condition from all the included participants.
    """
    counter = 0
    df_filtered = df[df['observation'].isin(sub_list)]  # Filter the data for the selected participants
    # Loop through each participant in the list
    for curr_sub in sub_list:
        curr_df = calc_performance_target(curr_sub, df_filtered)  # Get performance data for the participant
        
        if counter == 0:
            # Initialize the dataframe with the first participant's data
            counter += 1
            all_sub_df = curr_df
        else:
            # Append the current participant's data to the overall dataframe
            # Replace append with pd.concat
            all_sub_df = pd.concat([all_sub_df, curr_df]).reset_index(drop=True)


    return all_sub_df

def calc_performance_target_group_noprobe(df, sub_list):
    """
    Takes a list of participants and calculates the baseline performance for each of them, separated by conditions.
    Includes both image detection and probe detection performance for each condition.
    Only includes trials where is_probe == "NO".
    
    :param df: the dataframe containing the individual participants' trial-level responses
    :param sub_list: the list of participants to be included
    :return: a dataframe with performance measures for each condition from all the included participants.
    """
    counter = 0
    # Filter data for selected participants
    df_filtered = df[df['observation'].isin(sub_list)]
    
    # Further filter to only trials where is_probe == "NO"
    df_filtered = df_filtered[df_filtered['is_probe'] == 'NO']
    
    # Loop through each participant
    for curr_sub in sub_list:
        curr_df = calc_performance_target(curr_sub, df_filtered)  # Get performance data for participant
        
        if counter == 0:
            all_sub_df = curr_df
            counter += 1
        else:
            all_sub_df = pd.concat([all_sub_df, curr_df]).reset_index(drop=True)
    
    return all_sub_df

def calc_performance_target_group_yesprobe(df, sub_list):
    """
    Takes a list of participants and calculates the baseline performance for each of them, separated by conditions.
    Includes both image detection and probe detection performance for each condition.
    Only includes trials where is_probe == "NO".
    
    :param df: the dataframe containing the individual participants' trial-level responses
    :param sub_list: the list of participants to be included
    :return: a dataframe with performance measures for each condition from all the included participants.
    """
    counter = 0
    # Filter data for selected participants
    df_filtered = df[df['observation'].isin(sub_list)]
    
    # Further filter to only trials where is_probe == "NO"
    df_filtered = df_filtered[df_filtered['is_probe'] == 'YES']
    
    # Loop through each participant
    for curr_sub in sub_list:
        curr_df = calc_performance_target(curr_sub, df_filtered)  # Get performance data for participant
        
        if counter == 0:
            all_sub_df = curr_df
            counter += 1
        else:
            all_sub_df = pd.concat([all_sub_df, curr_df]).reset_index(drop=True)
    
    return all_sub_df




def fit_ols_get_beta(df):
    """
    Fit a linear model relating exposure time to hit rate
    :param df: a dataframe for a given participant, with two columns, hit rates and duration (exposure time)
    :return: the estimated beta
    """
    model = ols(formula='hit~duration', data=df)
    results = model.fit()
    beta = results.params['duration']
    return beta

def run_bootstrapping(df, sub_list, n_iter=1000):
    """
    Run bootstrapping to to get a distribution of estimated relationship between exposure time and hit rates
    (sample with replacement)
    :param df: a dataframe with all the participants' performance data
    :param sub_list: the list of unique participants
    :param n_iter: the number of bootstrapping iterations
    :return: a list of difference values between the beta estimated for images with large reconstruction error values
    and that for images with small reconstruction error values
    """
    rng = np.random.RandomState(1)
    all_diff = []
    for curr_iter in tqdm(range(n_iter)):
        sampled_subs = rng.choice(sub_list, len(sub_list))
        curr_iter_beta_diff = []
        for ind, curr_sampled_sub in enumerate(sampled_subs):
            curr_df = df[df['sub']==curr_sampled_sub]
            # fit a beta
            RE_large_df = curr_df[curr_df['RE'] == 'Large']

            RE_large_model = ols(formula='hit~duration', data=RE_large_df)
            RE_large_results = RE_large_model.fit()
            RE_large_beta = RE_large_results.params['duration']

            RE_small_df = curr_df[curr_df['RE'] == 'Small']
            RE_small_model = ols(formula='hit~duration', data=RE_small_df)
            RE_small_results = RE_small_model.fit()
            RE_small_beta = RE_small_results.params['duration']

            curr_iter_beta_diff.append(RE_large_beta - RE_small_beta)

        all_diff.append(np.mean(curr_iter_beta_diff))
    return all_diff

# For graphing
def grouper(iterable, n, fillvalue=None):
    "Collect data into fixed-length chunks or blocks"
    # grouper('ABCDEFG', 3, 'x') --> ABC DEF Gxx"
    args = [iter(iterable)] * n
    return zip_longest(*args, fillvalue=fillvalue)

def summarize_img_hit_by_duration(df, duration_list):
    """
    Summarize the hit rate for each image, separate for each duration
    :param df: a dataframe with all participants' responses to targets only
    :param duration_list: the list exposure times
    :return: a dataframe with the hit rate calculated for each image separately for each duration
    """

    df['img_duration'] = [int(k[-1]) for k in df['condition'].str.split('_')]

    img_hit_by_duration = pd.DataFrame(columns=['Image index', 'hit', 'duration', 'num of responses'])
    for curr_ind, curr_duration in enumerate(duration_list):
        curr_df = df[df['img_duration'] == curr_duration]
        curr_img_hit = curr_df.groupby(by='test_img')['response_num'].mean().reset_index().rename(
            columns={'response_num': 'hit'})
        curr_img_resp_count = curr_df.groupby(by='test_img')['response_num'].count().reset_index().rename(
            columns={'response_num': 'num of responses'})

        curr_sum_df = curr_img_hit.merge(curr_img_resp_count)
        curr_sum_df['duration'] = curr_duration
        curr_sum_df['Image index'] = [int(k[0]) for k in curr_sum_df['test_img'].str.split('_')]

        if curr_ind == 0:
            img_hit_by_duration = curr_sum_df
        else:
            img_hit_by_duration = img_hit_by_duration.append(curr_sum_df).reset_index(drop=True)

    return img_hit_by_duration


def stack_data_for_bootstrapping(sub_list, df):
    """
    Restack the dataframe given a group of sampled participants
    :param sub_list: the list of sampled participants (i.e., could have duplicates because we sample with replacement)
    :param df: a dataframe with all participants' responses to targets only
    :return: a dataframe with responses from the sampled participants
    """
    for curr_ind, curr_sub in enumerate(sub_list):
        curr_sub_data = df[df['observation'] == curr_sub]

        if curr_ind == 0:
            sampled_data = curr_sub_data
        else:
            sampled_data = sampled_data.append(curr_sub_data)

    return sampled_data

